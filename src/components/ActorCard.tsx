import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../hooks/creditsInterfaces';

interface Props {
  actor: Cast;
}
const ActorCard = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
  return (
    <View style={styles.actorCard}>
      {actor.profile_path && <Image source={{uri}} style={styles.image} />}
      <View style={styles.actorInfo}>
        <Text style={styles.textName}>{actor.name}</Text>
        <Text style={styles.textCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};

export default ActorCard;

export const styles = StyleSheet.create({
  actorCard: {
    marginBottom: 20,
    height: 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  actorInfo: {
    marginLeft: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
});
