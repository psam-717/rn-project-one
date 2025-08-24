import {Text, View, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';
import Person from '../assets/image.jpg';

export default function Home () {
  return (
    <View className='flex-1 items-center justify-center' >

      <Image className='w-4/6 h-2/6 rounded-md' source={Person}></Image>

      <Text className='text-3xl font-bold'>Let us get our shit together</Text>
      <Text className='text-xl  m-4'>This is awesome</Text>

      <TouchableOpacity className='bg-gray-300 p-5 rounded-xl mt-5'
        onPress={() => {
          console.log("Button pressed")
        }}
      >
        <Text>Pressable</Text>
        
      </TouchableOpacity>

      <Link href='/about' className='mt-6'>Home page</Link>
    </View>

    
  )
}



