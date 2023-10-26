/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, } from 'react-native';

import Router from './src/navigation/Router';

// import HomeScreen from './src/screens/Home';

import { withAuthenticator } from '@aws-amplify/ui-react';

const App: () => React$Node = () => {
  console.log(App);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default withAuthenticator(App);

