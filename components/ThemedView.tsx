import { View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

import type { StyleProp, ViewStyle } from 'react-native';
type ThemedViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const ThemedView: React.FC<ThemedViewProps> = ({ style,...props }) => {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];
  return (
    <View 
        style={[{backgroundColor: theme.background}, style]} 
        {...props}
    />

  )
}

export default ThemedView