import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { colors } from '../utils/constants';
import MainTabNavigator from './MainTabNavigator';


const AppMainNav = StackNavigator({
    Home: {
        screen: MainTabNavigator,
    },
}, {
    cardStyle:{
        backgroundColor: '#F1F6FA'
    },
    navigationOptions: () => ({
        headerTitle: '(img)',
        headerStyle: {
            backgroundColor: colors.WHITE
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.SECONDARY
        }
    })
});

class AppNavigator extends Component {
    render() {
        return <AppMainNav />
    }
}

export default AppNavigator;
