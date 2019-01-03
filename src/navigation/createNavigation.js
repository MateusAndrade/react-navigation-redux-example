import React, { PureComponent } from 'react';
import { createAppContainer } from 'react-navigation';

import NavigationService from '../navigation/navigationService';

import AppWithNavigationState from '../navigation/tabStack';

const AppContainer = createAppContainer(AppWithNavigationState);

/* Here is created the application with the navigation state */
class App extends PureComponent {
  render() {
    return (
      <AppContainer
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

export default App;
