import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const MainButton = props => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={props.onPress}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: '#E67205',
    borderRadius: 30,
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    padding: 10,
  },
});
