import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import { human, systemWeights } from 'react-native-typography'
import format from 'date-fns/format'

import { makeCircle } from '../../utils/themes'



const styles = StyleSheet.create({
    root: {
        height: 60,
        backgroundColor: '#fff',
    },
    meta: {
        height: 60,
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 16,
        flex: 1,
        borderTopWidth: .3,
        paddingVertical: 16
    },
    actionBtn: {
        flex: 1,
        paddingBottom: 40
    },
    userMetaWrapper: {
        flex: 1,
        flexDirection: 'row',
    },
    dateWrapper: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 0.3,
        paddingLeft: 8
    },
    avatarWrapper: {
        flex: 0.15,
        justifyContent: 'center',
    },
    avatarImg: {
        ...makeCircle(45),
        alignSelf: 'center',
    },
    userInfoWrapper:{
        justifyContent: 'center',
        flex: 1,
        paddingLeft: 10
    },
    username:{
        ...human.titleObject,
        ...systemWeights.bold,
        fontSize: 18
    },
    location:{
        ...human.footnoteObject,
        ...systemWeights.light
    },
    dateText: {
        ...human.titleObject,
        ...systemWeights.regular,
        fontSize: 15
    }
});

export default function Header ({ firstName='Ricardo', lastName='Cadogan', date= new Date()}) {
    return (
        <View style={styles.root}>
            <View style={styles.meta}>
                <View style={styles.userMetaWrapper}>
                    <View style={styles.avatarWrapper}>
                        <MaterialCommunityIcons name='arrow-down-drop-circle' size={35} />
                    </View>
                    <View style={styles.userInfoWrapper}>
                        <Text style={styles.username}>@{firstName}{lastName}</Text>
                    </View>
                </View>
                <View style={styles.dateWrapper}>
                    <Text style={styles.dateText} >{format(date, 'MMM D, YYYY')}</Text>
                </View>
            </View>
        </View>
    );
}