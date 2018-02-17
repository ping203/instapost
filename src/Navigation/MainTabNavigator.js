import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import Touchable from '@appandflow/touchable';

import { colors } from '../utils/constants';
import FeedTabNavigator from './FeedTabNavigator';
import StoriesFeedTabNavigator from './StoriesFeedTabNavigator';
import { makeSlop } from '../utils/themes';


const styles = StyleSheet.create({
    actionBtn: {
        width: 100,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        marginHorizontal: 16
    },
    text: {},
});



const MainTabNavigator = TabNavigator({
    Discover: {
        screen: StoriesFeedTabNavigator,
        navigationOptions: () => ({
            headerTitle: '(img)',
            tabBarIcon: ({ tintColor }) => (
                <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                    <Text color={tintColor} style={styles.text}>Discover</Text>
                </Touchable>
            ),
        })
    },
    Art: {
        screen: FeedTabNavigator,
        navigationOptions: () => ({
            headerTitle: '(img)',
            tabBarIcon: ({ tintColor }) => (
                <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                    <Text color={tintColor} style={styles.text}>Art</Text>
                </Touchable>
            ),
        })
    },
    Stories: {
        screen: StoriesFeedTabNavigator,
        navigationOptions: () => ({
            headerTitle: '(img)',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Touchable hitSlop={makeSlop(20)} feedback='opacity' color={tintColor} style={styles.actionBtn} >
                        <Text color={tintColor} style={styles.text}>Stories</Text>
                    </Touchable>
                </View>
            ),            
        })
    },
}, {
    lazy: true,
    tabBarPosition: 'top',
    swipeEnabled: false,
    initialRouteName: 'Art',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.PRIMARY,
        inactiveTintColor: colors.LIGHT_GRAY,
        style: {
            backgroundColor: colors.WHITE,
            height: 100,
            paddingBottom: 20,
            paddingVertical: 5
        }
    }
});


export default MainTabNavigator;
