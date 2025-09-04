import {Pressable, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import { Link, router } from 'expo-router';
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

      {/* Custom Text with the ThemedText Component */}
      <ThemedText title >Let us get our shit together</ThemedText>

      {/* height prop can be overwritten */}
      <Spacer height={30}/>

      {/* Custom Image using the ThemedLogo Component */}
      <ThemedLogo />



      {/*Custom prop to add space */}
      <Spacer/> 

      <View className='flex-row justify-evenly items-center  w-full'>
        
        {/* Profile page button */}
        <Pressable className='bg-gray-300 p-5 rounded-xl active:bg-neutral-300'
          onPress={() => router.push('profile')}
        >
          <ThemedText style={{color: 'black'}}>Profile page</ThemedText>
        </Pressable>


        {/* login button  */}
        <TouchableOpacity className='bg-gray-300 p-5 rounded-xl'
          onPress={() => router.push('auth/login')}
        >
          <ThemedText style={{color: 'black'}}>Login page</ThemedText>
        </TouchableOpacity>
        

        <TouchableOpacity className='bg-gray-300 p-5 rounded-xl'>
          <Text>Sign up button</Text>
        </TouchableOpacity>

      </View>



      <Spacer/>

      <Link href='/about' >
        <ThemedText>About page</ThemedText>
      </Link>
    </ThemedView>

    
  )
}



