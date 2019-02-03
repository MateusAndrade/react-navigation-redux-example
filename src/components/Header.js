import React from 'react';
import { connect } from 'react-redux';

import { StyleSheet, Text, View } from 'react-native';

import { capitalizeString } from '../utils'

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  userInfo: state.user.userInfo,
});

export const HeaderHome = ({ userInfo, title }) => (
  <View style={stylesHome.container}>
    <Text style={stylesHome.title}>{`${title} ${capitalizeString(userInfo.name.first)}`}!</Text>
  </View>
);

export const HeaderContainer = connect(mapStateToProps, null)(HeaderHome);


const stylesHome = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: '#0D47A1',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 15,
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});