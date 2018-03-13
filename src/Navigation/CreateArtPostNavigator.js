import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { MaterialIcons, Feather } from '@expo/vector-icons';

import { colors } from '../utils/constants';
import { SelectImageScreen, PhotoGalleryScreen } from '../screens';


const TAB_ICON_SIZE = 30;


const CreateArtTabNavigator = TabNavigator({
    Images: {
        screen: SelectImageScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons size={TAB_ICON_SIZE} color={tintColor} name='photo-size-select-actual'/>
            ),
            
        })
    },
    Camera: {
        screen: PhotoGalleryScreen,
        navigationOptions: () => ({
            headerTitle: 'Notification',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons size={TAB_ICON_SIZE} color={tintColor} name='photo-camera'/>
            )
        })
    },
    Video: {
        screen: SelectImageScreen,
        navigationOptions: () => ({
            headerTitle: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Feather size={TAB_ICON_SIZE} color={tintColor} name='video'/>
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
            backgroundColor: '#000',
            height: 50,
            paddingVertical: 5
        }
    }
});

const CreateArtPostStackNavigator = StackNavigator(
    {
        Home: {
            screen: CreateArtTabNavigator,
        }
    }, {
    navigationOptions: {
        header: null,
        headerMode: 'none'
      },
    }
  );

class CreateArtPostNavigator extends Component {
    static navigationOptions = () => {
        return ({
            header: null,
            headerMode: 'none'
        });
    } 
    render() {
        return <CreateArtPostStackNavigator />
    }
}

export default CreateArtPostNavigator;
