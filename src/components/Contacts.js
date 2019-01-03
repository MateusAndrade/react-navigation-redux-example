import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Contacts extends Component {
  state = { }

  render() {
    return (
      <View style={styles.container}>
        <Text>Contacts</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Contacts;