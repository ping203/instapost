import React, { Component } from 'react';
// import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import { StoriesPostCard } from '../../components';


class StoriesFeedsScreen extends Component {
    state = {}
    render() {
        return (
            <ScrollView> 
                <StoriesPostCard/>
                <StoriesPostCard/>
                <StoriesPostCard/>
                <StoriesPostCard/>
                <StoriesPostCard/>
                <StoriesPostCard/>
            </ScrollView>
        );
    }
}

export default StoriesFeedsScreen;