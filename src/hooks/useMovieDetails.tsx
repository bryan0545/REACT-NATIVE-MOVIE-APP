import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {DetailsFullMovie} from '../interfaces/movieDBInterfaces';
import {Cast, CreditsResponse} from './creditsInterfaces';
interface MovieDetails {
  isLoading: boolean;
  fullMovie?: DetailsFullMovie;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [state, setState] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const fullMovie = movieDB.get<DetailsFullMovie>(`/${movieId}`);
    const cast = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

    const [fullMovieResponse, castResponse] = await Promise.all([
      fullMovie,
      cast,
    ]);

    setState({
      isLoading: false,
      fullMovie: fullMovieResponse.data,
      cast: castResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {...state};
};
