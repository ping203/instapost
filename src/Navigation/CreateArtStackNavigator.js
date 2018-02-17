import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
// import { connect } from 'react-redux';
import { FontAwesome, Foundation, Feather, EvilIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { colors } from '../utils/constants';
import { FeedScreen, NotificationsScreen, ExploreScreen, ProfileScreen } from '../screens';
import HeaderActionButtons from '../components/HeaderActionButtons';
import SelectImageScreen from '../screens/SelectImageScreen';
import PreviewScreen from '../screens/PreviewScreen';
import PublishScreen from '../screens/PublishScreen';


const TAB_ICON_SIZE = 30;
const styles = StyleSheet.create({
    actionBtn: {
        paddingTop: 20,
        paddingBottom: 40,
        backgroundColor: '#fff'
    },    
});

const FeedStack = StackNavigator(
    {
        Home: {
            screen: FeedScreen,
        }
    }, {
    navigationOptions: {
        header: (
                <View style={styles.actionBtn}>
                    <HeaderActionButtons />
                </View>
        ),
        headerMode: 'none'
      },
    }
  );

const CreateArtStackNavigator = StackNavigator({
    Home: {
        screen: SelectImageScreen,
    },
    Preview: {
        screen: PreviewScreen
    },
    Publish: {
        screen: PublishScreen
    }
}, {
    cardStyle:{
        backgroundColor: '#F1F6FA'
    },
    navigationOptions: () => ({
        headerStyle: {
            backgroundColor: colors.WHITE
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.SECONDARY
        }
    })
});

const SelectArtImageTabs = TabNavigator({
    Home: {
        screen: CreateArtStackNavigator,
        navigationOptions: () => ({
            header: null,
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons size={TAB_ICON_SIZE} color={tintColor} name='photo-size-select-actual'/>
            ),
        })
    },
    Camera: {
        screen: NotificationsScreen,
        navigationOptions: () => ({
            headerTitle: 'Explore',
            tabBarIcon: ({ tintColor }) => (
                <MaterialIcons size={TAB_ICON_SIZE} color={tintColor} name='photo-camera'/>
            )
        })
    },
    Video: {
        screen: NotificationsScreen,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor }) => (
                <Feather size={TAB_ICON_SIZE} color={tintColor} name='video'/>
            )
        })
    },
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

const Tabs = TabNavigator({
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
        screen: SelectArtImageTabs,
        navigationOptions: () => ({
            tabBarIcon: ({ tintColor, navigation }) => (
                <FontAwesome size={TAB_ICON_SIZE} color={tintColor} name='plus-square-o' onPress={() => navigation.navigate('CreateArt')}/>
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

const AppMainNav = StackNavigator({
    Home: {
        screen: Tabs,
    },
    CreateArt: {
        screen: CreateArtStackNavigator
    }
}, {
    cardStyle:{
        backgroundColor: '#F1F6FA'
    },
    navigationOptions: () => ({
        headerStyle: {
            backgroundColor: colors.WHITE
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.SECONDARY
        }
    })
});

export default AppMainNav;
