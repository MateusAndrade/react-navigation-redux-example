import React from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

import { capitalizeString } from '../utils';

const Contact = props => {
  const { userInfo } = props;

  console.log('userInfo', userInfo);

  const fullUserName = `${capitalizeString(userInfo.name.first)} ${capitalizeString(userInfo.name.last)}`;

  return (
    <View>
      <Text>{fullUserName}</Text>
    </View>
  );
};

Contact.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({

});

export default Contact;
