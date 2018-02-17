import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Touchable from '@appandflow/touchable';
import Ionicons from '@expo/vector-icons/Ionicons';
import { human, systemWeights } from 'react-native-typography'

import { makeSlop } from '../../utils/themes';

const styles = StyleSheet.create({
    root: {
        height: 100,
        paddingHorizontal: 16,
    },
    actionsWrapper: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    actionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        marginHorizontal: 16
    },
    screenTitleSectionWrapper: {
        height: 50,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    screenTitleWrapper: {
        flexDirection: 'row',
        flex: 1
    },
    screenTitleTextWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        flexDirection: 'row',
        flex: 1
    },
    screenTitleText: {
        ...human.titleObject,
        ...systemWeights.bold,
        fontSize: 18
    },
    screenInfoBtn: {
        alignItems: 'flex-end',
        flexDirection: 'row',
        flex: 0.05
    },
});


export default class HeaderActionButtons extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.screenTitleSectionWrapper}>
            <View style={styles.screenTitleWrapper}>
                <View style={styles.screenTitleTextWrapper}>
                    <Text style={styles.screenTitleText}>(img)</Text>
                </View>
                <View style={styles.screenInfoBtn}>
                    <Ionicons size={20} name='ios-information-circle'/>
                </View>
            </View>
        </View>
        <View style={styles.actionsWrapper} >
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                <Text>Discover</Text>
            </Touchable>
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                <Text>Art</Text>
            </Touchable>
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                <Text>Stories</Text>
            </Touchable>
        </View>
      </View>
    )
  }
}
