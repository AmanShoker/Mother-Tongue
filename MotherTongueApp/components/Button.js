import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Button({ label, onPress, icon }) {
  return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
  );
}
  
const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});