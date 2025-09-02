import { Stack } from 'expo-router';
import "../global.css";
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

// Main entry point of the app
export default function RootLayout() {
    const colorScheme = useColorScheme() ?? 'light';
    const theme = Colors[colorScheme];

    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerStyle: { backgroundColor: theme.navBackground },
                headerTintColor: theme.title,
            }}
        >
            <Stack.Screen name="index" options={{ title: 'Home page' }} />
            <Stack.Screen name="about" options={{ title: 'About page' }} />
            <Stack.Screen name="profile" options={{ title: 'Profile page' }} />
            {/* ensure that the directory of the page is taken into consideration */}
            <Stack.Screen name="auth/login" options={{ title: 'Login' }} /> 
        </Stack>
    );
}