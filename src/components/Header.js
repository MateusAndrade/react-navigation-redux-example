import React from 'react';
import { connect } from 'react-redux';

import { ActivityIndicator, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { capitalizeString } from '../utils'

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  userInfo: state.user.userInfo,
});

const mountHomeTitle = (userInfo, routeName, title) => routeName === "UserInfo" ? 
  `${title} ${capitalizeString(userInfo.name.first)}!` : 'Contacts'; 

export const HeaderHome = ({ isFetching, userInfo, title, navigation }) => (
  <View style={[stylesHome.container, { alignItems: isFetching ? 'center' : 'flex-start' }]}>
    { isFetching ? 
      <ActivityIndicator color="#fff" /> : 
        <Text style={stylesHome.title}>{mountHomeTitle(userInfo, navigation.state.routeName, title)}</Text>  
    }
  </View>
);

export const HeaderContainer = connect(mapStateToProps, null)(HeaderHome);

const stylesHome = StyleSheet.create({
  backButton: {
    paddingRight: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#1976D2',
    height: 50,
    justifyContent: 'center',
    marginTop: 20,
    paddingLeft: 15,
    width: '100%',
    elevation: 2,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});

export const Header = ({ title, navigation }) => (
  <View style={[stylesHome.container, stylesHome.buttonContainer]}>
    <TouchableOpacity style={stylesHome.backButton} onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={25} color="#fff" />
    </TouchableOpacity>
    <Text style={stylesHome.title}>{title}</Text>  
  </View>
)