import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Image, CameraRoll, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Touchable from '@appandflow/touchable';
import { Dropbox } from 'dropbox';

const Root = styled.View`
    backgroundColor: #f2f2f2;
    flex: 1;
    paddingTop: 5;
`;
const styles = StyleSheet.create({
    root: {
        // flexDirection: 'row'
    },
    photosScrollWrapper: {
        backgroundColor: '#000'
    }
});
class PhotosGallery extends Component {
    state = {
        photos: []
    }
    componentDidMount() {
        this._loadPhotos()
    }
    // _loadDropBox = () => {
    //     const dbx = new Dropbox({ accessToken: 'auarqlxpb5ct0qu' });
    //     dbx.filesListFolder({path: ''})
    //     .then(function(response) {
    //         console.log(response);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });
    // }
    _loadPhotos = () => {
        const { first, groupTypes, assetType } = this.props;
        CameraRoll.getPhotos({
            first,
            groupTypes,
            assetType,
        })
        .then(r => {
            this.setState({ photos: r.edges });
        })
        .catch((err) => {
            console.log('PhotosGallery error: ', err);
        });
    }
    _getPhotoData = (data) => {
        console.log('photo data: ', data);
    }
    render() {
        const { width } = Dimensions.get('window');
        return (
            <Root style={[styles.root, this.props.style]}> 
                <ScrollView horizontal style={styles.photosScrollWrapper}>
                    {this.state.photos.map((p) => (
                        <Touchable key={p.node.image.uri} feedback='opacity' onPress={() => this._getPhotoData(p)}>
                            <Image
                            style={{
                                width: width/3,
                                overflow: 'visible',
                                flex: 0.33,
                                marginHorizontal: 8,
                                backgroundColor: '#000'
                            }}
                            source={{ uri: p.node.image.uri }}
                            
                            />
                        </Touchable>
                    ))}
                </ScrollView>
            </Root>
        );
    }
}

export default PhotosGallery;