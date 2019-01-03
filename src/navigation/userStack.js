import { createStackNavigator } from 'react-navigation';

import routes from './routes';

import UserContainer from '../containers/UserContainer';

const userContainer = {
  initialRouteName: routes.UserInfo,
};

/* Here is create or stack for the Tab User, if you want you can
add another screen to this stack just importing the desired container */
const userStack = createStackNavigator({
  [routes.UserInfo]: {
    screen: UserContainer,
  },
}, userContainer);

export default userStack;
