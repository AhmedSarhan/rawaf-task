import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { useForm, FormProvider, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { router } from "expo-router";
import { loginAction, registerAction } from "@rawaf/shared";

export type FormValues = {
  user: string;
  password: string;
};
const registerSchema = yup.object().shape({
  user: yup.string().required(),
  password: yup.string().min(8).required(),
});

export const AuthForm = ({ isLogin }: { isLogin?: boolean }) => {
  const [error, setError] = useState<string | undefined>();

  const methods = useForm<FormValues>({
    defaultValues: {
      user: "",
      password: "",
    },
    resolver: yupResolver(registerSchema),
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const registerHandler = async (data: FormValues) => {
    setError(undefined);
    try {
      const response = await registerAction(data);
      if (response.status === 201) {
        router.push("/login");
      }
      console.log("response", response);
    } catch (err) {
      const error = err as Record<string, string>;
      // setError(JSON.parse(error).message)
      const errorData = JSON.parse(error.message);
      if (errorData.status === 409) {
        setError("User already exists");
      } else {
        setError(errorData.message || "Something went wrong");
      }

      console.log("Error status:", errorData.status);
      console.log("Error message:", errorData.message);
      // console.log("error", error, error.response, error.data, error.message);
    }
  };

  const loginHandler = async (data: FormValues) => {
    setError(undefined);
    try {
      const response = await loginAction(data);
      const resData = await response.json();

      if (response.status === 200) {
        console.log("resData", resData);
        localStorage.setItem("accessToken", resData.accessToken);
        router.replace("/listing");
      }
      console.log("response", response);
    } catch (error) {
      // setError(JSON.parse)
      console.log("error", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Controller
            control={methods.control}
            name="user"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="username"
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
                keyboardType="default"
              />
            )}
          />
          <Controller
            control={methods.control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry
              />
            )}
          />

          <Button
            title={isLogin ? "Login" : 'Register'}
            onPress={methods.handleSubmit(
              isLogin ? loginHandler : registerHandler
            )}
          />

          {
            error && (
              <Text style={{ color: "red", textAlign: 'center' }}>{error}</Text>
            )
          }
          <Pressable
            onPress={() => router.replace(isLogin ? "/auth/sign-up" : "/auth/sign-in")}
            style={{
              marginHorizontal: "auto",
            }}
          >
            <Text style={{ color: "#3b82f6" }}>
              {isLogin ? "Not a member? Register" : "Already a member? Login"}
            </Text>
          </Pressable>
        </View>
      </View>
    </FormProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
  },
  form: {
    padding: 16,
    maxWidth: 600,
    marginHorizontal: "auto",
    border: "1px solid gray",
    borderRadius: 8,
    gap: 16,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
