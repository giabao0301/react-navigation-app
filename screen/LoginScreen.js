import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import MainButton from '../UI/MainButton';
import Header from '../UI/Header';
import BottomLine from '../UI/BottomLine';
import InputField from '../UI/InputField';
import {useAuthContext} from '../context/auth-context';

const LoginScreen = ({navigation}) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const {isAuthenticated, onLogin, onLogout} = useAuthContext();

  const changeEmailHandler = enteredValue => {
    setEnteredEmail(enteredValue);
  };
  console.log(enteredEmail);
  return (
    <View style={styles.body}>
      <Header title="Welcome" />
      <InputField
        placeholder="Email"
        keyboardType="email-address"
        iconName="envelope"
        value={enteredEmail}
        onChangeText={changeEmailHandler}
      />
      <InputField
        placeholder="Password"
        iconName="lock"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.pinkText}>Forgot password?</Text>
      </TouchableOpacity>
      <MainButton title="LOG IN" />

      <View style={styles.loginOption}>
        <Text style={styles.blackBoldText}>Or login with</Text>
        <View style={styles.logoOptionLogo}>
          <Image
            style={styles.logo}
            source={require('../assets/facebook_logo.png')}
          />
          <Image
            style={styles.logo}
            source={require('../assets/google_logo.png')}
          />
        </View>
      </View>

      <BottomLine
        content={`Don't have an account?`}
        action="Sign up here!"
        onPress={() => navigation.navigate('Sign up')}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 40,
  },

  loginOption: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoOptionLogo: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  logo: {
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 50,
  },

  forgotPassword: {
    alignSelf: 'flex-end',
  },
  pinkText: {
    color: '#DA67A3',
    marginTop: 5,
  },

  blackBoldText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
