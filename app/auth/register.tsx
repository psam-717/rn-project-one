import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Link, router } from 'expo-router'

const Register = () => {
  return (
    <ThemedView style={styles.container}>

        <ThemedText>Welcome to the register page</ThemedText>

        <Spacer height={100}/>


            


        <ThemedView style={{flexDirection: 'row', width: 'auto'}}>
            <ThemedText style={{marginRight: 10}}>
                Already have an account? 
            </ThemedText>

            <Pressable onPress={() => {router.back()}}
            >
                <ThemedText>Login instead</ThemedText>
            </Pressable>


        </ThemedView>
        


    </ThemedView>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    
})