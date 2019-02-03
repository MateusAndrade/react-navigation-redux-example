import React, { Component } from 'react';

import { StyleSheet, Text, View } from 'react-native';

class ContactDetails extends Component {
  state = { }

  render() {
    return (
      <View style={StyleSheet.container}>
        <Text>ContactDetails</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ContactDetails;