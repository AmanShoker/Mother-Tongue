import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function Button({ label }) {
  return (
      <TouchableOpacity style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>

  );
}
  
const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: "100%",
    backgroundColor: "#33333380",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
    marginTop: 5,
    textAlign: "center",
  },
});