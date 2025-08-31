import { View, Text, useColorScheme, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

import type { StyleProp, ViewStyle } from 'react-native'
type ThemedCardProps = {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
};
const ThemedCard: React.FC<ThemedCardProps> = ({style,...props}) => {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

  return (
    <View
        style={[{backgroundColor: theme.uiBackground}, styles.card,style]}
        {...props}
      
    />
  )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})