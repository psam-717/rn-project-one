import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const Login = () => {
  return (
    <ThemedView style={styles.container}>

      <ThemedText style={styles.heading}>
        Welcome to the login page
      </ThemedText>
        
    </ThemedView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    alignSelf: 'center',
    marginTop: 20
  }
})