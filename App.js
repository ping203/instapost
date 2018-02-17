import React from 'react';
import { UIManager } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Navigation from './src/Navigation'
import AppNavigation from './src/AppNavigation'
import { colors } from './src/utils/constants';

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  state = {
    appIsReady: false
  }
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Navigation />
      </ThemeProvider>
    );
  }
}
