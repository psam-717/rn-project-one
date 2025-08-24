import {Stack} from 'expo-router';
import "../global.css"

// main entry point of the app
export default function RootLayout(){
    return (
        <Stack>
            <Stack.Screen name='index' options={{title: 'Home page'}}/>
            <Stack.Screen name='about' options={{title: 'About page'}}/>
        </Stack>
    )
}