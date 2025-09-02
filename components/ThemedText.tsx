import { StyleProp, Text, TextStyle, useColorScheme, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors';

type ThemedTextProps = {
    style?: StyleProp<TextStyle> // ensure the type of StyleProp is a TextStyle
    title?: boolean;
    children?: React.ReactNode;
};

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false, children }) => {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme]; // theme should be selected form user's option

    const textColor = title ? theme.title : theme.text;
    
    // set default styles for text (they can be overwritten though)
    const defaultStyles: TextStyle = {
        color: textColor,
        fontSize: title ? 24 : 18,
        fontWeight: title? 'bold' : 'normal',
        marginTop: title ? 28 : 0
    }

    return (
      <Text style={[defaultStyles, style]}>
        {children}
      </Text>
        
    );
}

export default ThemedText