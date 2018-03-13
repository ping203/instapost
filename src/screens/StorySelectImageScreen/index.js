import React, { Component } from 'react';
import styled from 'styled-components/native';


const Root = styled.View`
    backgroundColor: #f2f2f2;
    flex: 1;
    paddingTop: 5;
`;
const Text = styled.Text``

class SelectImageScreen extends Component {
    state = {}
    render() {
        return (
            <Root> 
                <Text>
                    Story Select Image
                </Text>
            </Root>
        );
    }
}

export default SelectImageScreen;