import { StyleSheet, Image, Platform } from "react-native";
import { Login } from "@/src/screens/login/login";

export default function TabTwoScreen() {
  return <Login />;
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
