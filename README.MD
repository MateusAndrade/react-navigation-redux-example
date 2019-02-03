# React-Native - Navigation with Redux

This is a simple react-native project consisting of a application with two tabs, each on with your screens, containers, etc. 

Made with:

[React Navigation](https://github.com/react-navigation/react-navigation) - React Navigation v3.0.9 
[React Redux](https://github.com/reduxjs/react-redux) - React-Redux: v6.0.0
[Redux](https://github.com/reduxjs/redux) - Redux v4.0.1.


## Motivation

As of version 2.0, the integration with Redux in its state is no longer officially supported by react-navigation.

From that point on, the state of your application's navigation and the state (redux for example) should be treated in separate ways. Instead of using something like the following:

```javascript
const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  ...
});

// Note: createReactNavigationReduxMiddleware must be run before reduxifyNavigator
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({
  state: state.nav,
});
const AppWithNavigationState = connect(mapStateToProps)(App);

const store = createStore(
  appReducer,
  applyMiddleware(middleware),
);
```

- CODE

I hope with this boilerplate it is simpler to understand how to manage your navigation and its state separately. =)


## Getting Started

Just clone this repo, and run a:

```
npm i && npm start
```

Or even simpler

```
yarn && yarn start
```

I recommend using a debugger like:  [React-Native Debugger](https://github.com/jhen0409/react-native-debugger).

## Deployment

After starting your development server just run a ```react-native run-android``` in a new shell tab.

## Authors

* **Mateus Andrade** - *Initial work* - [https://github.com/MateusAndrade](https://github.com/MateusAndrade)

## TODO

- Add action to edit user.
- Write some JS Docs on redux and navigation actions.