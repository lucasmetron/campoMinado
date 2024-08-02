import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flag = ({bigger}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flagPole, bigger ? styles.flagPoleBigger : null]} />
      <View style={[styles.flag, bigger ? styles.flagBigger : null]} />
      <View style={[styles.base1, bigger ? styles.base1Bigger : null]} />
      <View style={[styles.base2, bigger ? styles.base2Bigger : null]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagPole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    backgroundColor: '#F22',
    height: 5,
    width: 6,
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    backgroundColor: '#222',
    width: 6,
    height: 2,
    marginTop: 10,
    marginLeft: 7,
  },
  base2: {
    position: 'absolute',
    backgroundColor: '#222',
    width: 10,
    height: 2,
    marginTop: 12,
    marginLeft: 5,
  },
  flagPoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  base1Bigger: {
    width: 12,
    height: 4,
    marginTop: 20,
    marginLeft: 12,
  },
  base2Bigger: {
    width: 20,
    height: 4,
    marginTop: 24,
    marginLeft: 8,
  },
});

export default Flag;
