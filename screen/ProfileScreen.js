import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ProfileScreen = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
