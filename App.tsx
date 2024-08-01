import React from 'react';
import {SafeAreaView, Text, Dimensions} from 'react-native';

import {params} from './src/params';

const CampoMinado: React.FC = () => {
  return (
    <SafeAreaView>
      <Text>
        Colunas{params.getColumnsAmount()} Linhas: {params.getRowsAmount()}
      </Text>

      <Text>width: {Dimensions.get('window').width}</Text>
      <Text>height: {Dimensions.get('window').height}</Text>
      <Text>scale: {Dimensions.get('window').scale}</Text>
      <Text>fontScale: {Dimensions.get('window').fontScale}</Text>
    </SafeAreaView>
  );
};

export default CampoMinado;
