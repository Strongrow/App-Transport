import React from 'react';
import { View,Text ,TextInput } from 'react-native';
import {Background} from '../components/Backgroundyellow';
import { BackgroundWhite } from '../components/BckgroundWhite';
import { BackgroundGray } from '../components/Backgroundray';
import WhileLogo from '../components/WhileLogo';
import { loginStyles } from '../theme/LoginTheme';

export const PreloadScreen = () => {
  return (
    <>
      <BackgroundWhite />
      <Background />
      <BackgroundGray />
      <WhileLogo />
      <TextInput 

      />


    </>
  )
}