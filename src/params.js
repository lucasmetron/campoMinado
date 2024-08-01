import {Dimensions} from 'react-native';

export const params = {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRatio: 0.15,
  difficultLevel: 0.1, //0.1facil, 0.2 medio e 0.3 dificil,
  getColumnsAmount() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeitght = Dimensions.get('window').height;
    const boardHeight = totalHeitght * (1 - this.headerRatio);
    return Math.floor(boardHeight / this.blockSize);
  },
};
