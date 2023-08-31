import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Link href="/auth/sign-in" asChild>
        <Pressable style={{
          backgroundColor: '#3b82f6',
          padding: 10,
          borderRadius: 5,
        }}>
          <Text style={{color: 'white'}}>Join us</Text>
        </Pressable>
      </Link>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})