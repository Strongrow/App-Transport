import React from 'react'
import { View,Text } from 'react-native';

export const BackgroundWhite = () => {
  return (
    <View style={{
        position:'absolute',
        backgroundColor:'#FFFFFF',
        width: 600,
        height: 500,
        top: 150,
        transform: [
          {rotate:'10deg'}
      ]
        }}
        />
  )
}