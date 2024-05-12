import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function Button({ label, onPress, icon }) {
  return (
      <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
  );
}
  
const styles = StyleSheet.create({
  button: {
    flex: 5,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
});