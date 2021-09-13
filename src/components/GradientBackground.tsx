import React, {useContext, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const GradientBackground = ({children}: Props) => {
  const {colors, prevColors, setMainPrevColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = useFade();

  useEffect(() => {
    fadeIn(() => {
      setMainPrevColors(colors);
      fadeOut(0);
    });
  }, [colors]);

  return (
    <View style={styles.gradient}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        end={{x: 0.7, y: 0.7}}
      />

      <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          end={{x: 0.7, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};

export default GradientBackground;

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
