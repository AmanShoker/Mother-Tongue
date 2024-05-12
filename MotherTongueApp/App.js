import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Button from './componets/Button';
import PictureButton from './componets/PictureButton';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.pictureButtonContainer}>
        <PictureButton/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8F0FF', //Backgrownd for whole screen
    alignItems: 'center',
  },
  pictureButtonContainer: {
    position: 'absolute',
    bottom: 45,
},
  buttonContainer: { //will use for next buttons
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    height: "20%",
    backgroundColor: "#33333388",
  },
});
