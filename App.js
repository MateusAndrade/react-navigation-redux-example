import React from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';

import AppWithNavigationWrapper from './src/navigation/createNavigation';

const Root = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1565C0"
        translucent
      />
      <AppWithNavigationWrapper />
    </SafeAreaView>
  </Provider>
);

export default Root;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
