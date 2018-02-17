import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { human, systemWeights } from 'react-native-typography'
import Touchable from '@appandflow/touchable';
// import iOSColors from 'react-native-typography/dist/helpers/iOSColors';

import Header from './Header';
import Meta from './Meta';
import ActionButton from '../ActionButtons';
import { makeSlop } from '../../utils/themes';

const styles = StyleSheet.create({
    root: {
        minHeight: 800,
        paddingBottom: 10,
    },
    metaWrapper: {
        paddingHorizontal: 16
    },
    img: {
        flex: 1
    },
    meta: {
        height: 60,
        flexDirection: 'row',
        borderBottomWidth: 0.5,
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'space-around'
    },
    rsvpWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    titleLabel: {
        ...human.titleObject,
        ...systemWeights.regular,
        fontSize: 22
    },
    rsvpBtnText: {
        ...human.titleObject,
        ...systemWeights.bold,
        fontSize: 12        
    },
    titleText: {
        ...human.titleObject,
        ...systemWeights.light,
        fontSize: 12        
    },
})

class StoriesPostCard extends Component {
    state ={}
    render() {
        const title = 'Architectures scenery at its best!'
        return (
            <View style={styles.root}>
                <Header />
                <Image style={styles.img} source={{uri: 'https://www.pinterest.com/eamesoffice/arts-architecture-magazine/g'}} />
                <View style={styles.metaWrapper} >
                    <View style={styles.meta} >
                        <View style={styles.titleWrapper}>
                            <Text style={styles.titleLabel} >TITLE</Text>
                            <Text style={styles.titleText} >{title}</Text>
                        </View>
                        <View style={styles.rsvpWrapper}>
                            <Touchable hitSlop={makeSlop(20)} feedback='opacity' >
                                <Text style={styles.rsvpBtnText} >RSVP</Text>
                            </Touchable>
                        </View>
                    </View>
                    <ActionButton />
                    <Meta/>
                </View>
            </View>
        );
    }
}

export default StoriesPostCard;