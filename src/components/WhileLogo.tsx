import React from 'react'
import { View, Image } from 'react-native';

const WhileLogo = () => {
  return (
    <View style = {{
        alignItems:'center'
    }}>
        <Image 
            source={ require('../assets/7973.jpg') }
            style={{
                width: 210,
                height: 200,
                top: 300
            }}
        />
      
    </View>
  )
}

export default WhileLogo
