import { Login } from "@/src/screens/login/login";
import { Stack } from "expo-router";

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Login",
        }}
      />
      <Login />
    </>
  );
}
