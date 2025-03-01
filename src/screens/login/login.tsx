import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { router } from "expo-router";

export const Login = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => router.navigate("/home")}
      >
        <Text style={styles.titleButton}>Proxima tela</Text>
      </TouchableOpacity>
    </View>
  );
};
