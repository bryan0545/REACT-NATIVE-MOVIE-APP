import React from 'react';
import {Animated, Button, View} from 'react-native';
import {useFade} from '../hooks/useFade';

const FadeScreen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
      }}>
      <Animated.View
        style={{
          width: 150,
          height: 150,
          backgroundColor: '#084f64',
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity,
        }}
      />
      <Button title="fadeIn" onPress={fadeIn} />
      <Button title="fadeOut" onPress={fadeOut} />
    </View>
  );
};

export default FadeScreen;
