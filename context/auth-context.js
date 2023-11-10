import React, {useState, useContext, createContext} from 'react';
import {Alert} from 'react-native';

const AuthContext = createContext({
  isAuthenticated: false,
  onLogin: (email, password) => {},
  onLogout: () => {},
});

export const AuthContextProvider = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const loginHandler = (email, password) => {
    if (email === '21521866@gm.uit.edu.vn' && password === '123456789') {
      setIsAuthenticated(true);
    } else {
      Alert.alert('Incorrect email or password.', '', [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed'),
        },
      ]);
    }
  };
  const logoutHandler = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
