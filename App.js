import React, { useState } from 'react';
import {StyleSheet, AppLoading} from 'react-native';
import Navigate from './navigate';
import * as Font from 'expo-font';

const fonts = ()=> Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false)

  if(font) {
    return (
      <Navigate />
    );
  }
  return(
    <AppLoading
      startAsync={fonts}
      onFinish={()=> setFont(true)}
      onError={(err)=> console.warn(err)}
    />
  )
}

const styles = StyleSheet.create({
  
});
