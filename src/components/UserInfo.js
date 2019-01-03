import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class UserInfo extends Component {
  state = { }

  render() {
    return (
      <View style={styles.container}>
        <Text>UserInfo</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default UserInfo;