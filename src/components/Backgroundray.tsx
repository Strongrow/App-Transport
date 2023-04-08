import React from 'react'
import { View,Text } from 'react-native';

export const BackgroundGray = () => {
  return (
    <View style={{
        position: 'absolute', bottom: 0, right: 0,
        backgroundColor:'#999999',
        top: -370,
        width: 700,
        height: 400,
        transform: [
            {rotate:'-50deg'}
        ]
        }}
        />
  )
}