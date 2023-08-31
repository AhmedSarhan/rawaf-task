import { View, Text } from 'react-native'
import React from 'react'
import { AuthForm } from "../../modules/auth/components/auth-form";
const SignIn = () => {
  return (
    <View>
      <AuthForm isLogin />
    </View>
  )
}

export default SignIn