import ImageColors from 'react-native-image-colors';
import {ImageColorsResult} from 'react-native-image-colors/lib/typescript/types';

export const getImageColors = async (uri: string) => {
  let primary;
  let secondary;

  const colors: ImageColorsResult = await ImageColors.getColors(uri, {});

  if (colors.platform === 'android') {
    primary = colors.dominant;
    secondary = colors.average;
  } else if (colors.platform === 'ios') {
    primary = colors.primary;
    secondary = colors.secondary;
  } else {
    primary = 'gray';
    secondary = 'white';
  }

  return [primary, secondary];
};
