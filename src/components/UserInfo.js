import React, { Component } from 'react';
import {  ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Avatar from './Avatar';

import { capitalizeString } from '../utils';

const UserInfoRow = ({ label, title }) => (
  <View style={styles.row}>
    <Text style={styles.titleUserInfo}>{title}</Text>
    <Text>{label}</Text>
  </View>
) 

class UserInfo extends Component {
  state = { }

  componentDidMount() {
    this.props.getUserInfo();
  }

  render() {

    const {
      error,
      isFetching,
      userInfo,
    } = this.props;

    if (isFetching && !userInfo.picture) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator />
          <View style={styles.loadingTextContainer}>
            <Text>
              Loading...
            </Text>
          </View>
        </View>
      )
    };

    if (!isFetching && userInfo.picture) {
      const fullUserName = `${capitalizeString(userInfo.name.first)} ${capitalizeString(userInfo.name.last)}`;
      return (
        <View style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar rounded height={100} width={100} source={{ uri: userInfo.picture.large }} />
            <Text style={styles.userName}>{fullUserName}</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.email} title="Email:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.cell} title="Cellphone:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.phone} title="Phone:"  />
            </View>
          </View>
        </View>
      );    
    }

    return null;

  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#9e9e9e',
    marginBottom: 10,
    paddingBottom: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  containerLoading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingTextContainer: {
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
  },
  softMarginUserInfo: {
    marginBottom: 10,
  },
  titleUserInfo: {
    fontWeight :'bold',
    marginRight: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default UserInfo;