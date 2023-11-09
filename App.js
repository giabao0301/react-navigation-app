import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screen/LoginScreen';
import SignUpScreen from './screen/SignUpScreen';
import HomeScreen from './screen/HomeScreen';
import CategoriesScreen from './screen/CategoriesScreen';
import FavouritesScreen from './screen/FavouritesScreen';
import ProfileScreen from './screen/ProfileScreen';
import {useAuthContext} from './context/auth-context';
const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const MainBottom = createBottomTabNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Sign up" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
};

const MainBottomScreen = () => {
  return (
    <MainBottom.Navigator screenOptions={{headerShown: false}}>
      <MainBottom.Screen name="Home" component={HomeScreen} />
      <MainBottom.Screen name="Categories" component={CategoriesScreen} />
      <MainBottom.Screen name="Favourites" component={FavouritesScreen} />
      <MainBottom.Screen name="Profile" component={ProfileScreen} />
    </MainBottom.Navigator>
  );
};

const App = () => {
  const {isAuthenticated} = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="Authentication" component={AuthStackScreen} />
        ) : (
          <Stack.Screen name="BottomTab" component={MainBottomScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
