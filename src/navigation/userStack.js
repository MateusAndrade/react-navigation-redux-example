import React from 'react';
import { createStackNavigator } from 'react-navigation';

import routes from './routes';

import UserContainer from '../containers/UserContainer';

import { HeaderContainer as HeaderHome } from '../components/Header';

const userContainer = {
  initialRouteName: routes.UserInfo,
};

/* Here is create or stack for the Tab User, if you want you can
add another screen to this stack just importing the desired container */
const userStack = createStackNavigator({
  [routes.UserInfo]: {
    screen: UserContainer,
    navigationOptions: ({ navigation }) => ({
      header: <HeaderHome navigation={navigation} title="Welcome" />,
    }),
  },
}, userContainer);

export default userStack;
