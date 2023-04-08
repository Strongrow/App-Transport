import React from 'react'
import { View, Text } from 'react-native';

export const BackgraundLine = () => {
    return (
        <View style={{
            position: 'absolute', bottom: 0, right: 20,
            backgroundColor: 'black',
            top: 250,
            width: 370,
            height: 10,
            borderRadius: 20


        }}
        />
    )
}