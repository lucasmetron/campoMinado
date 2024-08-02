import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {params} from './src/params';
import {createMineBoard} from './src/functions';
import MineField from './src/components/MineField';

const CampoMinado: React.FC = () => {
  const [board, setBoard] = useState(createBoard());

  function minesAmount() {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  }

  function createBoard() {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMineBoard(rows, cols, minesAmount()),
    };
  }

  return (
    <SafeAreaView style={styles.container}>
      <MineField board={board.board} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

export default CampoMinado;
