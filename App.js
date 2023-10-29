/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image} from 'react-native';

import Router from './src/navigation/Router';

// import HomeScreen from './src/screens/Home';

import { withAuthenticator } from '@aws-amplify/ui-react-native';
import { Button, Text } from '@aws-amplify/ui-react-native/dist/primitives';

function App({ signIn, user }) {
  console.log(App);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="https://docs.amplify.aws/assets/logo-dark.svg"
        />
      <Text>Hello {user.username}</Text>
      <Button onClick={signIn}>Sign in</Button>
      <Router />
      </View>
    </>
  );
};

export default withAuthenticator(App);

