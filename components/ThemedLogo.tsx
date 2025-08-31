import { Image, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'


import DarkLogo from '../assets/logos/black-logo.png'
import WhiteLogo from '../assets/logos/white-logo.png';


import type { StyleProp, ViewStyle } from 'react-native'
type ThemedLogoProps = {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};

const ThemedLogo: React.FC<ThemedLogoProps> = ({style, ...props}) => {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = colorScheme === 'dark' ? DarkLogo : WhiteLogo;
  return (
    <Image
      source={theme}
      style={[styles.img,]}
      {...props}
    />
  )
}

export default ThemedLogo

const styles = StyleSheet.create({
  img: {
    width: '66.37%',
    height: '33.63%',
    borderRadius: 8,
    marginTop: 5
  }
})