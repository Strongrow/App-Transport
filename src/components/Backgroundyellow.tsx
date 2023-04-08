import React from 'react'
import { View,Text } from 'react-native';

export const Background = () => {
  return (
    <View style={{
        position:'absolute',
        backgroundColor:'#F0E54B',
        top: 650,
        width: 800,
        height: 900,
        transform: [
            {rotate:'45deg'}
        ]
        }}
        />
  )
}