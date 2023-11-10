// Trịnh Gia Bảo - 21521866
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';
import HomeScreen from '../screen/HomeScreen';
import CategoriesScreen from '../screen/CategoriesScreen';
import FavouritesScreen from '../screen/FavouritesScreen';
import ProfileScreen from '../screen/ProfileScreen';
import {useAuthContext} from '../context/auth-context';
import Icon from 'react-native-vector-icons/FontAwesome';

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
// Trịnh Gia Bảo - 21521866
const MainBottomScreen = () => {
  return (
    <MainBottom.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Categories') {
            iconName = 'th-large';
          } else if (route.name === 'Favourites') {
            iconName = 'heart';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return (
            <Icon
              name={iconName}
              size={30}
              color={focused ? '#578CEE' : '#000'}
            />
          );
        },
        tabBarBadge: route.name === 'Favourites' ? 3 : null,
        tabBarStyle: {
          padding: 10,
          height: 70,
        },
        // Trịnh Gia Bảo - 21521866
        tabBarLabelStyle: {
          margin: 5,
        },
        tabBarBadgeStyle: {
          position: 'absolute',
          top: -5,
          left: 5,
          fontSize: 12,
          lineHeight: 14,
        },
      })}
      initialRouteName="Home">
      <MainBottom.Screen name="Home" component={HomeScreen} />
      <MainBottom.Screen name="Categories" component={CategoriesScreen} />
      <MainBottom.Screen name="Favourites" component={FavouritesScreen} />
      <MainBottom.Screen name="Profile" component={ProfileScreen} />
    </MainBottom.Navigator>
  );
};
// Trịnh Gia Bảo - 21521866
const Wrapper = () => {
  const {isAuthenticated} = useAuthContext();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name="BottomTab" component={MainBottomScreen} />
        ) : (
          <Stack.Screen name="Authentication" component={AuthStackScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Wrapper;
