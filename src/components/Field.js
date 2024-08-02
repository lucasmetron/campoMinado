import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {params} from '../params';
import Mine from './Mine';
import Flag from './Flag';

const Field = props => {
  const {mined, opened, nearMines, exploded, flagged} = props;

  const styleField = [styles.field];

  //outros estilos abaixo
  if (opened) {
    styleField.push(styles.opened);
  }

  let color = null;
  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2a28d7';
    }
    if (nearMines === 2) {
      color = '#2b520f';
    }
    if (nearMines > 2 && nearMines < 6) {
      color = '#f9060a';
    }
    if (nearMines >= 6) {
      color = '#f221a9';
    }
  }

  if (exploded && opened) {
    styleField.push(styles.exploded);
  }

  if (flagged) {
    styleField.push(styles.styleField);
  }

  //esse estilo só vai ser inserido caso nenhum dos estilos acima sejam adicionados
  if (!opened && !exploded) {
    styleField.push(styles.regular);
  }

  return (
    <TouchableOpacity style={styleField}>
      {!mined && opened && nearMines > 0 && (
        <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
      )}

      {mined && opened && <Mine />}

      {flagged && !opened && <Flag />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
  },
  regular: {
    backgroundColor: '#999',
    borderLeftColor: '#CCC',
    borderTopColor: '#CCC',
    borderRightColor: '#333',
    borderBottomColor: '#333',
  },
  opened: {
    backgroundColor: '#999',
    borderColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontWeight: 'bold',
    fontSize: params.fontSize,
  },
  exploded: {
    backgroundColor: 'red',
    borderColor: 'red',
  },
  styleField: {},
});

export default Field;
