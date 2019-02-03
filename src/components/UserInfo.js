import React, { Component } from 'react';
import {  ActivityIndicator, StyleSheet, Text, ScrollView, View } from 'react-native';

import moment from 'moment';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Avatar from './Avatar';

import { capitalizeString } from '../utils';

import coutryList from '../config/countrys';

/***
 * Render a simple line with a label and a title
 */
const UserInfoRow = ({ label, title }) => (
  <View style={styles.row}>
    <Text style={styles.titleUserInfo}>{title}</Text>
    <Text>{label}</Text>
  </View>
);

/***
 * Render a simple line with a icon with a title
 */
const HeaderRow = ({ title, icon }) => (
  <View style={[styles.row, styles.headerRow, styles.center]}>
    <Icon name={icon} size={25} color="#1976D2" />
    <Text style={styles.headerRowTitle}>{title}</Text>
  </View>
);

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
          <ActivityIndicator size="large" color="#1976D2" />
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

      const country = coutryList.find((country) => userInfo.nat === country.code);

      return (
        <ScrollView style={styles.container}>
          <View style={styles.avatarContainer}>
            <Avatar rounded height={100} width={100} source={{ uri: userInfo.picture.large }} />
            <Text style={styles.userName}>{fullUserName}</Text>
            <View style={[styles.row, styles.center]}>
              <Text style={styles.birtDate}>{moment(userInfo.registered.age).format('DD/MM/YYYY')}</Text>
              <Icon name="cake-layered" size={15} color="#fff" />
            </View>
          </View>
          <View style={styles.userInfoContainer}>
            <HeaderRow title="Contact Info" icon="account-box-outline" />
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.email} title="Email:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.cell} title="Cellphone:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.phone} title="Phone:"  />
            </View>
            <HeaderRow title="Address Info" icon="map-marker" />
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.location.street} title="Street:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.location.city} title="City:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.location.state} title="State:"  />
            </View>
            <View style={styles.softMarginUserInfo}>
              <UserInfoRow label={userInfo.location.postcode} title="Postal Code:"  />
            </View>
            {country && 
              <View style={styles.softMarginUserInfo}>
                <UserInfoRow label={country.name} title="Country:"  />
              </View>
            }
          </View>
        </ScrollView>
      );    
    }

    return null;

  }
}

const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center',
    backgroundColor: '#1976D2',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    elevation: 1,
    marginBottom: 10,
    paddingBottom: 15,
    paddingTop: 20,
  },
  birtDate: {
    color: '#fff',
    fontSize: 12,
    marginRight: 5,
    marginTop: 2,
  },
  container: {
    flex: 1,
  },
  center : {
    alignItems: 'center',
  },
  containerLoading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#9E9E9E',
    paddingBottom: 10,
  },
  headerRowTitle: {
    fontSize: 14,
    marginLeft: 10,
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
  userInfoContainer: {
    paddingHorizontal: 20,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default UserInfo;