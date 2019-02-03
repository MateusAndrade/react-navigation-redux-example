import React from 'react';
import PropTypes from 'prop-types';

import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { capitalizeString } from '../utils';

import Avatar from './Avatar';

const Contact = props => {
  const { userInfo, onSelect } = props;

  const fullUserName = `${capitalizeString(userInfo.name.first)} ${capitalizeString(userInfo.name.last)}`;

  return (
    <TouchableOpacity onPress={() => onSelect(userInfo)} style={[styles.container, styles.row,  styles.center]}>
      <View style={[styles.center, styles.row]}>
        <Avatar rounded height={50} width={50} source={{ uri: userInfo.picture.large }} />
        <View style={[styles.column, styles.userInfoContainer]}>
          <Text style={styles.userName}>{fullUserName}</Text>
          <Text style={styles.userEmail}>{userInfo.email}</Text>
        </View>
      </View>
      <View style={[styles.iconContainer, styles.center]}>
        <Icon name="chevron-right" size={25} color="#1976D2" />
      </View>
    </TouchableOpacity>
  );
};

Contact.propTypes = {
  onSelect: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  column : {
    flexDirection: 'column',
  },
  container: {
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
  },
  userEmail: {
    fontSize: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  userInfoContainer: {
    marginLeft: 15,
  },
});

export default Contact;
