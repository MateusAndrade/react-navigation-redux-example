import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const HeaderHome = ({ title }) => (
  <View style={stylesHome.container}>
    <Text style={stylesHome.title}>{title}</Text>
  </View>
);

const stylesHome = StyleSheet.create({
  container: {
    backgroundColor: '#0D47A1',
    marginTop: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});