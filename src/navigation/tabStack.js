import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import routes from './routes';

import contactsStack from '../navigation/contactsStack';
import userStack from '../navigation/userStack';

/* Set te desired config to your tab bottom here, like icons, labels */
const tabNavigatorContainer = {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;

      switch (routeName) {
        case 'Contacts':
          iconName = 'account-multiple';
          break;
        case 'UserInfo':
          iconName = 'account';
          break;
        default:
          iconName = 'account';
      }
      return (
        <View style={{ width: 30 }}>
          <Icon name={iconName} size={30} color={tintColor} />
        </View>
      );
    },
  }),
  tabBarOptions: {
    activeTintColor: '#1976d2',
    inactiveTintColor: '#64b5f6',
    showLabel: false,
  },
};

/* Create your tabBottom with the 'stacks' to each tab */
const tabNavigator = createBottomTabNavigator({
  [routes.UserInfo]: {
    screen: userStack,
  },
  [routes.Contacts]: {
    screen: contactsStack,
  },
}, tabNavigatorContainer);

export default tabNavigator;
