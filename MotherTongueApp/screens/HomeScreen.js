import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import  { CameraView, useCameraPermissions } from 'expo-camera';

import Button from '../components/Button';
import PictureButton from '../components/PictureButton';


export default function HomeScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useCameraPermissions();
  const [facing, setFacing] = useState('back');
  const cameraRef = useRef(null);

  
  if (!hasPermission) {
    return <View />;
  }
  if (!hasPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log('Photo taken', photo);
    }
  }; 

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.pictureButtonContainer}>
          <PictureButton onPress={toggleCameraFacing}/>
        </View>
        </CameraView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  container: {
    flex: 1,
    //backgroundColor: '#transparent', //Backgrownd for whole screen
    justifyContent: 'center',
    
  },
  pictureButtonContainer: {
    position: 'absolute',
    bottom: 45,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',
    left: 0,
    right: 0,
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
