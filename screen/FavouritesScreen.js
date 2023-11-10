// Trịnh Gia Bảo - 21521866
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const FavouritesScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Favourites Screen</Text>
    </View>
  );
};

export default FavouritesScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
});
