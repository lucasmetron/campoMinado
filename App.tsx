import React from 'react';
import {SafeAreaView, Text, Dimensions, StyleSheet} from 'react-native';

import {params} from './src/params';
import Field from './src/components/Field';

const CampoMinado: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>
        Colunas{params.getColumnsAmount()} Linhas: {params.getRowsAmount()}
      </Text>

      <Text>width: {Dimensions.get('window').width}</Text>
      <Text>height: {Dimensions.get('window').height}</Text>
      <Text>scale: {Dimensions.get('window').scale}</Text>
      <Text>fontScale: {Dimensions.get('window').fontScale}</Text>

      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={3} />
      <Field opened nearMines={4} />
      <Field opened nearMines={5} />
      <Field opened nearMines={6} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field opened flagged />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CampoMinado;
