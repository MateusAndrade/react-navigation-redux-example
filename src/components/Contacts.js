import React, { Component } from 'react';

import { ActivityIndicator, FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

import Contact from './Contact';

import routes from '../navigation/routes';

/**
 * You should avoid doing this, i prefer grouping all of my actions inside
 * a actions folder. Separated by their category, like: navigation, request, etc.
 */
import NavigationService from '../navigation/navigationService';

class Contacts extends Component {
  state = { }

  componentDidMount() {
    const { getContactsInfo } = this.props;
    getContactsInfo();
  }

  toContactDetail = contactInfo => {
    NavigationService.navigate(routes.ContactDetails, contactInfo)
  }

  render() {

    const { contacts, isFetching } = this.props;

    if (isFetching) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator size="large" color="#1976D2" />
          <View style={styles.loadingTextContainer}>
            <Text>
              Loading Contacts...
            </Text>
          </View>
        </View>
      )
    };

    return (
      <View style={styles.container}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => `k=${item.login.username}`}
          renderItem={({ item }) => <Contact onSelect={this.toContactDetail} userInfo={item} />}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loadingTextContainer: {
    marginTop: 5,
  },
});

export default Contacts;