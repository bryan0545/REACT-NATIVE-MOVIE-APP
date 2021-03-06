import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Movie} from '../interfaces/movieDBInterfaces';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

const MoviePoster = ({movie, height = 400, width = 280}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen', movie)}
      activeOpacity={0.8}
      style={{
        height,
        width,
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
});

export default MoviePoster;
