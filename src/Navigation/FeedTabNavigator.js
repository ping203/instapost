import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome, Foundation, Feather, EvilIcons } from '@expo/vector-icons';

import { colors } from '../utils/constants';
import { FeedScreen, NotificationsScreen, ExploreScreen, ProfileScreen } from '../screens';


const TAB_ICON_SIZE = 30;

const FeedStack = StackNavigator(
    {
        Home: {
            screen: FeedScreen,
        }
    }, {
    navigationOptions: {
        header: null,
        headerMode: 'none'
      },
    }
  );



const FeedTabNavigator = TabNavigator({
    Home: {
        screen: FeedStack,
        navigationOptions: () => ({
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <Foundation size={TAB_ICON_SIZE} color={tintColor} name='home'/>
            ),
        })
    },
    Explore: {
        screen: ExploreScreen,
        navigationOptions: () => ({
            headerTitle: 'Explore',
            tabBarIcon: ({ tintColor }) => (
                <EvilIcons size={TAB_ICON_SIZE} color={tintColor} name='search'/>
            )
        })
    },
    NewPost: {
        screen: NotificationsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name='plus-square-o' />
            ),
            
        })
    },
    Notification: {
        screen: NotificationsScreen,
        navigationOptions: () => ({
            headerTitle: 'Notification',
            tabBarIcon: ({ tintColor }) => (
                <EvilIcons size={TAB_ICON_SIZE} color={tintColor} name='heart'/>
            )
        })
    },
    Profile: {
        screen: ProfileScreen,
        navigationOptions: () => ({
            headerTitle: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Feather size={TAB_ICON_SIZE} color={tintColor} name='user'/>
            )
        })
    }
}, {
    lazy: true,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.LIGHT_GRAY,
        style: {
            backgroundColor: colors.WHITE,
            height: 50,
            paddingVertical: 5
        }
    }
});


export default FeedTabNavigator;
