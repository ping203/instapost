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
        headerStyle: {
            backgroundColor: colors.WHITE,
            height: 50
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.SECONDARY,
        }
    })
});

class AppNavigator extends Component {
    render() {
        return <AppMainNav />
    }
}

export default AppNavigator;
