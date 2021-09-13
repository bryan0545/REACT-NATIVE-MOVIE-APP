import React, {createContext, useState} from 'react';
import ImageColors from 'react-native-image-colors';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevColors: ImageColors;
  setMainColors: (imageColors: ImageColors) => void;
  setMainPrevColors: (imageColors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (imageColors: ImageColors) => {
    setColors(imageColors);
  };

  const setMainPrevColors = (imageColors: ImageColors) => {
    setPrevColors(imageColors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setMainPrevColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};

export const name = () => {};
