import { Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const home = () => {
  return (
    <ThemedView style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
      <ThemedText title>Welcome to the about page</ThemedText>

      <Link href='profile' >
        <ThemedText>Profile pages</ThemedText>
      </Link>

       
    </ThemedView>


  )
}

export default home