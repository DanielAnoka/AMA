import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/stack'; 

const ScanScreen = ({ route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const { userName } = route.params || {};

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code type: ${type}\nData: ${data}`);
    navigation.navigate('ScannedResultScreen', { scannedData: data });
  };

  const handleBackPress = () => {
    navigation.navigate('Home'); 
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <HeaderBackButton onPress={handleBackPress} />
      <Text style={styles.greetingText}>Hi, {userName}</Text>
      <Text style={styles.scanText}>Scan Product QR</Text>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={Camera.Constants.Type.back}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </View>
      {scanned && (
        <View style={styles.scanAgain}>
          <Text onPress={() => setScanned(false)}>Tap to Scan Again</Text>
        </View>
      )}
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 10,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  scanText: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
    color: '#DA291C',
  },
  cameraContainer: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    overflow: 'hidden',
    borderRadius: 10,
    marginBottom: 20,
  },
  camera: {
    flex: 1,
  },
  scanAgain: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
  },
});

export default ScanScreen;
