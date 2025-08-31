import {Text, TouchableOpacity, useColorScheme } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Person from '../assets/image.jpg';
import { Colors } from '../constants/Colors';
import ThemedView from '../components/ThemedView';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';

export default function Home () {

  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme]; 

  return (
    <ThemedView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >

      <Text className='text-2xl'>Dummy Text</Text>

      {/* height prop can be overwritten */}
      <Spacer height={50}/>

      {/* Custom Image using the ThemedLogo Component */}
      <ThemedLogo />

      {/* Custom Text with the ThemedText Component */}
      <ThemedText title >Let us get our shit together</ThemedText>

      {/*Custom prop to add space */}
      <Spacer/> 
      
      <TouchableOpacity className='bg-gray-300 p-5 rounded-xl'
        onPress={() => {
          console.log("Button pressed")
        }}
      >
        <Text>Pressable</Text>
        
      </TouchableOpacity>

      <Spacer/>

      <Link href='/about' >
        <ThemedText>Home page</ThemedText>
      </Link>
    </ThemedView>

    
  )
}



