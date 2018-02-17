import React, { Component } from 'react';
// import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import { PostCard } from '../../components';


class FeedsScreen extends Component {
    state = {}
    render() {
        return (
            <ScrollView> 
                <PostCard/>
            </ScrollView>
        );
    }
}

export default FeedsScreen;