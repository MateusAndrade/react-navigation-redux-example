import React from 'react';

import { createStackNavigator } from 'react-navigation';

import routes from './routes';

import ContactsContainer from '../containers/ContactsContainer';
import ContactDetailsContainer from '../containers/ContactDetailsContainer';

import { HeaderContainer as HeaderHome } from '../components/Header';

const contactsContainer = {
  initialRouteName: routes.Contacts,
};

/* Here is create or stack for the Tab User, if you want you can
add another screen to this stack just importing the desired container */
const contactsStack = createStackNavigator({
  [routes.Contacts]: {
    screen: ContactsContainer,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderHome navigation={navigation} title="Your contacts" />,
    }),
  },
  [routes.ContactDetails]: {
    screen: ContactDetailsContainer,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderHome navigation={navigation} title="Your contacts" />,
    }),
  },
}, contactsContainer);

export default contactsStack;
