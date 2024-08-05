import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableHighlight} from 'react-native';

import Modal from './src/components/screens/Modal';

const CampoMinado: React.FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => setIsShow(!isShow)}>
        <Text>Abrir</Text>
      </TouchableHighlight>
      <Modal show={isShow} setIsShow={setIsShow} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});

export default CampoMinado;
