import React from 'react'
import { View, Text, TextInput } from 'react-native';
import { BackgroundWhiteCenter } from '../components/BackgroundWhitecenter'
import { Background } from '../components/Backgroundyellow'
import { BackgroundGray } from '../components/Backgroundray'
import { StackScreenProps } from '@react-navigation/stack';



export const ChatScreens = () => {
    return (
        <>
            <BackgroundWhiteCenter />
            <Background />
            <BackgroundGray />
            <TextInput

            />
        </>
    )
}
