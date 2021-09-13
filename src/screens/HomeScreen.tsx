/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import HorizontalSlider from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="gree" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying!}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={280}
            inactiveSlideOpacity={0.9}
          />
        </View>

        <HorizontalSlider title="Popular" movies={popular!} />
        <HorizontalSlider title="Top rate" movies={topRated!} />
        <HorizontalSlider title="Upcoming" movies={upcoming!} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
