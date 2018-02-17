import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { human, systemWeights, iOSColors } from 'react-native-typography'
import Touchable from '@appandflow/touchable';
import Feather from '@expo/vector-icons/Feather';

import { makeSlop } from '../../utils/themes';


const styles = StyleSheet.create({
    root: {
        minHeight: 50,
    },
    meta: {
        height: 50,
    },
    wrapper: {
        flex: 1
    },
    text: {
        ...human.footnoteObject,
        ...systemWeights.light,
        paddingVertical: 4
    },
    viewAllComments: {
        ...human.calloutObject,
        color: iOSColors.midGray,
        paddingVertical: 4
    },
    commentsWrapper: {
        minHeight: 50,
    },
    tagView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tagText: {
        ...human.calloutObject,
        color: iOSColors.midGray,        
        fontSize: 12        
    },
    viewsText: {
        ...human.calloutObject,
        ...systemWeights.regular,
        color: iOSColors.midGray,        
        fontSize: 12,
        paddingLeft: 8        
    },
    tagsNPostViewsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const _renderTags = tags => tags.map(tag => <Text key={tag} style={styles.tagText} > #{tag}</Text>)

export default function Meta ({
    views = 8300,
    repostedBy = 'Sara',
    tags = ['Photography', 'Art', 'color', 'Exhibit', 'Form']
}) {
    return (
        <View style={styles.root}>
            <View style={styles.commentsWrapper} >
                <Text style={styles.text} >
                    <Text style={systemWeights.regular} >Reposted</Text> by @{repostedBy}
                </Text>
                <Text style={styles.text} >
                    <Text style={systemWeights.regular} >gena12</Text> been here its awesome
                </Text>
                <Text style={styles.text} >
                    <Text style={systemWeights.regular} >viennatravel</Text> I have seen this project go up
                </Text>
                <Touchable hitSlop={makeSlop(20)} feedback='opacity' >
                    <Text style={styles.viewAllComments} >View all 13 comments</Text>
                </Touchable>
            </View>
            <View style={styles.tagsNPostViewsWrapper} >
                <View style={styles.tagView} >
                    {_renderTags(tags)}
                </View>
                <View style={styles.tagView} >
                    <Feather name='eye' size={15} />
                    <Text style={styles.viewsText} >
                        {views}
                    </Text>
                </View>
            </View>
        </View>
    );
}