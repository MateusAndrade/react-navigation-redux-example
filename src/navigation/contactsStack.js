import { createStackNavigator } from 'react-navigation';

import routes from './routes';

import ContactsContainer from '../containers/ContactsContainer';

const contactsContainer = {
  initialRouteName: routes.Contacts,
};

/* Here is create or stack for the Tab User, if you want you can
add another screen to this stack just importing the desired container */
const contactsStack = createStackNavigator({
  [routes.Contacts]: {
    screen: ContactsContainer,
  },
}, contactsContainer);

export default contactsStack;
