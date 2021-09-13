import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {api_key: '20f31133997cadd2df2bd7aac512a59d', language: 'es-ES'},
});

export default movieDB;
