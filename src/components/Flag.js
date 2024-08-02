import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flagPole} />
      <View style={styles.flag} />
      <View style={styles.base1} />
      <View style={styles.base2} />
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
});

export default Flag;
