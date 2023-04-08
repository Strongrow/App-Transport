import React from 'react'
import { View,Text } from 'react-native';

export const BackgroundWhiteCenter = () => {
  return (
    <View style={{
        position:'absolute',
        backgroundColor:'#FFFFFF',
        width: 420,
        height: 800,
        top: 30,
        borderTopRightRadius: 80, 
        borderBottomRightRadius: 20

        }}
        />
  )
}