import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const HomeScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
