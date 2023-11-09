import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const CategoriesScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Categories Screen</Text>
    </View>
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
