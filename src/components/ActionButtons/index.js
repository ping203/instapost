import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons, EvilIcons, Feather, Entypo } from '@expo/vector-icons';
import { human, systemWeights } from 'react-native-typography'
import Touchable from '@appandflow/touchable';

import { makeSlop } from '../../utils/themes';

const styles = StyleSheet.create({
    root: {
        height: 50,
        flexDirection: 'row'
    },
    actionsWrapper: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    actionBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    likesActionBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    commentsCountActionBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    priceWrapper: {
        justifyContent: 'center',
        flex: 1
    },
    bookMarkWrapper: {
        flex: 0.2,
        alignItems: 'flex-end'
    },
    likeCountText: {
        ...human.titleObject,
        ...systemWeights.regular,
        fontSize: 10
    },
    commentCountText: {
        ...human.titleObject,
        ...systemWeights.regular,
        fontSize: 10
    }
});


export default class ActionButton extends Component {
  render() {
      const likes = '174';
      const commentsCount = '69';
    return (
      <View style={styles.root}>
        <View style={styles.priceWrapper} >
            <Text> $ 137.05</Text>
        </View>
        <View style={styles.actionsWrapper} >
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                <Ionicons name='ios-bookmark-outline' size={20} />
            </Touchable>
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.likesActionBtn} >
                <Entypo name='chevron-with-circle-up' size={20} />
                <Text style={styles.likeCountText} > {likes}</Text>
            </Touchable>
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.commentsCountActionBtn} >
                <EvilIcons name='comment' size={25} />
                <Text style={styles.commentCountText} > {commentsCount}</Text>
            </Touchable>
            <Touchable hitSlop={makeSlop(20)} feedback='opacity' style={styles.actionBtn} >
                <Feather name='share-2' size={20} />
            </Touchable>
        </View>
      </View>
    )
  }
}
