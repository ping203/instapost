import React, { Component } from 'react';
import styled from 'styled-components/native';


const Root = styled.View`
    backgroundColor: #f2f2f2;
    flex: 1;
    paddingTop: 5;
`;
const Text = styled.Text``

class PublishScreen extends Component {
    state = {}
    render() {
        return (
            <Root> 
                <Text>
                    Publish
                </Text>
            </Root>
        );
    }
}

export default PublishScreen;