import { Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const About = () => {
  return (
    <ThemedView style={[{flex: 1, justifyContent: 'center', alignItems: 'center'}]}>
      <ThemedText title>How do you dos</ThemedText>

      <Spacer/>

      <Link href='profile' >
        <ThemedText>Profile page</ThemedText>
      </Link>

       
    </ThemedView>


  )
}

export default About