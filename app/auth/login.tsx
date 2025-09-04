import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link } from 'expo-router'
import { Colors } from '../../constants/Colors'


const Login = () => {

  const handleSubmit = () => {
    console.log('Login dones')
  }

  return (
    <ThemedView style={styles.container}>

      <ThemedText >
        Welcome to the login page
      </ThemedText>

      <Spacer height={50}/>

      <View className='flex items-center'>
        {/* button */}
        <Pressable 
        onPress={handleSubmit}
        className='bg-purple-400 p-5 rounded-xl active:opacity-50 '>
          <Text className='text-2xl text-center'>Login</Text>
        </Pressable>  
      </View>

        

      
      <Spacer height={50}/>


      <ThemedView style={{flexDirection: 'row', width: 'auto'}}>

        <ThemedText style={{marginRight: 10}}>Don't have an account? </ThemedText>

        <Link href='auth/register'>
          <ThemedText>Register here</ThemedText>
        </Link>

      </ThemedView>

     
        
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    

  },
  pressed: {
    opacity: 0.5
  }
  
})