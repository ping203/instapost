import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PhotosGallery } from '../../components';

const styles = StyleSheet.create({
    root: {
        backgroundColor: 'red'
    }
});
class SelectImageScreen extends Component {
    state = {
        photos: []
    }
        render() {
        return (
            <ScrollView style={styles.root}>
                <View style={{ height: 800, backgroundColor: 'red' }} >
                    <PhotosGallery
                        style={{backgroundColor: 'green', flex: 0.25}}
                        first={20}
                        groupTypes='Library'
                        assetType='Photos'
                    />
                    <PhotosGallery
                        style={{backgroundColor: 'yellow', flex: 0.25}}
                        first={20}
                        groupTypes='All'
                        groupName='Favorites'
                        assetType='Photos'
                    />
                    <PhotosGallery
                        style={{backgroundColor: 'pink', flex: 0.25}}
                        first={20}
                        groupTypes='Album'
                        assetType='Photos'
                    />
                    <PhotosGallery
                        style={{backgroundColor: 'green', flex: 0.25}}
                        first={20}
                        groupTypes='All'
                        assetType='Photos'
                    />
                </View>
            </ScrollView> 
        );
    }
}

export default SelectImageScreen;