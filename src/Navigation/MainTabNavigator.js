import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, View, Text } from 'react-native';
import { human, systemWeights } from 'react-native-typography'

import { colors } from '../utils/constants';
import FeedTabNavigator from './FeedTabNavigator';
import StoriesFeedTabNavigator from './StoriesFeedTabNavigator';
import { DiscoverScreen } from '../screens'

const styles = StyleSheet.create({
    actionBtn: {
        // backgroundColor: 'red',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        marginHorizontal: 16
    },
    headerTextWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 60,
    },
    headerText: {
        ...human.titleObject,
        ...systemWeights.bold,
        fontSize: 18
    },
    text: {},
});



const MainTabNavigator = TabNavigator({
    Discover: {
        screen: DiscoverScreen,
        navigationOptions: () => ({
            header: (
                <View style={styles.headerTextWrapper}>
                    <Text style={styles.headerText}>(img)</Text>
                </View>
            ),
            tabBarIcon: ({ tintColor }) => (
                <View style={ [ styles.actionBtn, { borderColor: tintColor } ]}>
                    <Text style={ [ styles.text, { color: tintColor } ] }>Discover</Text>
                </View>
            ),
        })
    },
    Art: {
        screen: FeedTabNavigator,
        navigationOptions: () => ({
            header: (
                <View style={styles.headerTextWrapper}>
                    <Text style={styles.headerText}>(img)</Text>
                </View>
            ),
            tabBarIcon: ({ tintColor }) => (
                <View style={ [ styles.actionBtn, { borderColor: tintColor } ]}>
                    <Text style={ [ styles.text, { color: tintColor } ] }>Art</Text>
                </View>
            ),
        })
    },
    Stories: {
        screen: StoriesFeedTabNavigator,
        navigationOptions: () => ({
            header: (
                <View style={styles.headerTextWrapper}>
                    <Text style={styles.headerText}>(img)</Text>
                </View>
            ),
            tabBarIcon: ({ tintColor }) => (
                <View style={ [ styles.actionBtn, { borderColor: tintColor } ]}>
                    <Text style={ [ styles.text, { color: tintColor } ] }>Stories</Text>
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
            height: 60,
            paddingBottom: 20,
            paddingVertical: 5
        }
    }
});


export default MainTabNavigator;
