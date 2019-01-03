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
          iconName = 'account';
          break;
        case 'UserInfo':
          iconName = 'account-multiple';
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
    activeTintColor: 'red',
    inactiveTintColor: 'blue',
    showLabel: false,
  },
};

/* Create your tabBottom with the 'stacks' to each tab */
const tabNavigator = createBottomTabNavigator({
  [routes.Contacts]: {
    screen: contactsStack,
  },
  [routes.UserInfo]: {
    screen: userStack,
  },
}, tabNavigatorContainer);

export default tabNavigator;
