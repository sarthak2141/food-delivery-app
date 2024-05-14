/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text } from 'react-native'
import React from 'react'

import Navigation from './Navigation';
import { Provider } from 'react-redux'
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
    <Navigation/>
    </Provider>
  )
}

export default App