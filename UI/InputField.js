import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InputField = props => {
  return (
    <View style={styles.inputField}>
      <FontAwesome name={props.iconName} style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={'#a0a0a0'}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
};

export default InputField;
const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    color: '#000',
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#a0a0a0',
    alignItems: 'center',
    marginTop: 15,
  },
  inputIcon: {
    color: '#000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    color: '#000',
    width: '100%',
  },
});
