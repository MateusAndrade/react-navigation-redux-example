import React, { Component } from 'react';

import { Alert, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Avatar from './Avatar';

import { HeaderRow, UserInfoRow } from './UserInfo';

import coutryList from '../config/countrys';

import { capitalizeString } from '../utils';

/**
 * TODO: Split UserInfo into small components to use here
 */
class ContactDetails extends Component {
  static getDerivedStateFromProps({ deletedContact, resetDeleteContact, navigation }, state) {
    if (deletedContact) {
      Alert.alert(
        'Contact Deleted',
        'Contact deleted with success! =D',
        [
          {text: 'OK', onPress: () => {
            resetDeleteContact();
            navigation.goBack();
          }},
        ],
        {cancelable: false},
      );
    }
    return null;
  };

  state = {};

  deleteContact = () => {
    const { deleteContact } = this.props;

    const { contactInfo } = this.props.navigation.state.params;

    deleteContact(contactInfo);
  };

  editContact = () => {
    // TODO:
    console.log('edit');
  };

  render() {

    const { contactInfo } = this.props.navigation.state.params;

    const fullUserName = `${capitalizeString(contactInfo.name.first)} ${capitalizeString(contactInfo.name.last)}`;

    const country = coutryList.find((country) => contactInfo.nat === country.code);

    return (
      <ScrollView style={StyleSheet.container}>
        <View style={styles.avatarContainer}>
          <Avatar rounded height={100} width={100} source={{ uri: contactInfo.picture.large }} />
          <Text style={styles.userName}>{fullUserName}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={this.editContact}>
            <Icon name="account-edit" size={30} color="#00695C" />          
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={this.deleteContact}>
            <Icon name="account-remove" size={30} color="#B71C1C" />          
          </TouchableOpacity>
        </View>
        <View style={styles.contactInfoContainer}>
          <HeaderRow title="Contact Info" icon="account-box-outline" />
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.email} title="Email:"  />
          </View>
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.cell} title="Cellphone:"  />
          </View>
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.phone} title="Phone:"  />
          </View>
          <HeaderRow title="Address Info" icon="map-marker" />
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.location.street} title="Street:"  />
          </View>
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.location.city} title="City:"  />
          </View>
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.location.state} title="State:"  />
          </View>
          <View style={styles.softMargincontactInfo}>
            <UserInfoRow label={contactInfo.location.postcode} title="Postal Code:"  />
          </View>
          {country && 
            <View style={styles.softMargincontactInfo}>
              <UserInfoRow label={country.name} title="Country:"  />
            </View>
          }
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  actionButton : {

  },
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
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
    paddingBottom: 5,
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
  softMargincontactInfo: {
    marginBottom: 10,
  },
  titlecontactInfo: {
    fontWeight :'bold',
    marginRight: 10,
  },
  contactInfoContainer: {
    paddingHorizontal: 20,
  },
  userName: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default ContactDetails;