import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {DetailsFullMovie} from '../interfaces/movieDBInterfaces';
import {Cast} from '../hooks/creditsInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import ActorCard from './ActorCard';

interface Props {
  fullMovie: DetailsFullMovie;
  cast: Cast[];
}

const MovieDetails = ({fullMovie, cast}: Props) => {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="star-outline"
          color="grey"
          size={15}
          style={{marginRight: 3}}
        />
        <Text>{fullMovie.vote_average}</Text>
        <Text> - {fullMovie.genres.map(gen => gen.name).join(', ')}</Text>
      </View>
      <Text style={styles.title}>Historia</Text>
      <Text style={{fontSize: 18}}>{fullMovie.overview}</Text>
      <Text style={styles.title}>Presupuesto</Text>
      <Text style={{fontSize: 16}}>
        {currencyFormatter.format(fullMovie.budget, {code: 'USD'})}
      </Text>
      <View>
        <Text style={styles.title}>Actores</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <ActorCard actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginVertical: 10}}
        />
      </View>
    </View>
  );
};

export default MovieDetails;

export const styles = StyleSheet.create({
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
