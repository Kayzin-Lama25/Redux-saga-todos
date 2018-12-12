/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';  //redux-saga
//import firebase from 'firebase';
//import ReduxThunk from 'redux-thunk';

import NavigationService from './src/navigation/NavigationService';

import AppNavigator from './src/navigation/AppNavigation';
import Reducers from './src/reducers';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, {}, applyMiddleware(sagaMiddleware));

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <AppNavigator ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }} />
        </View>
      </Provider>
    );
  }

}

sagaMiddleware.run(rootSaga);