import {Dimensions} from 'react-native';
const dimension = Dimensions.get('window');

const getWidth = x => {
  x = x / 100;
  return Math.floor(x * dimension.width);
};

const getHeight = y => {
  y = y / 100;
  return Math.floor(y * dimension.height);
};

export default {
  getWidth,
  getHeight,
};
