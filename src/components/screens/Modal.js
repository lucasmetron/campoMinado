import React from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const ModalComp = props => {
  return (
    <Modal visible={props.show} animationType="fade" transparent>
      <View style={styles.container}>
        <View style={styles.modal}>
          <TouchableHighlight
            onPress={() => {
              props.setIsShow(false);
            }}>
            <Text>fechar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  modal: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});

export default ModalComp;
