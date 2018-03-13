import React from 'react';
import { StackNavigator } from 'react-navigation';

import { colors } from '../utils/constants';
import { SelectImageScreen, PreviewScreen, PublishScreen } from '../screens';


const CreateArtStackNavigator = StackNavigator({
    Home: {
        screen: SelectImageScreen,
    },
    Preview: {
        screen: PreviewScreen
    },
    Publish: {
        screen: PublishScreen
    }
}, {
    cardStyle:{
        backgroundColor: '#F1F6FA'
    },
    navigationOptions: () => ({
        headerStyle: {
            backgroundColor: colors.WHITE
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.SECONDARY
        }
    })
});

export default CreateArtStackNavigator;
