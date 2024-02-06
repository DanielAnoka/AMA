import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';


const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (username === 'Daniel' && password === '12345') {
      Alert.alert('Login Successful');
    } else {
      Alert.alert('Login Failed', 'Invalid username or password');
    }
    navigation.navigate('Home');
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login</Text>
      <View style={styles.dottedBox}>
        <View>
        <Text style={styles.pStyle}>Username</Text>
        <TextInput
          style={{...styles.input, marginTop: 50,}}
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        </View>
       
        <View>
            <Text style={{...styles.pStyle, top:-10, fontSize:13}}>Password</Text>
        <TextInput
          style={{...styles.input,marginBottom:0}}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        </View>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signUpText}>
        <View  style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 15 }} > Don't have an account? </Text>  
            <TouchableOpacity onPress={navigateToSignUp}>
            <Text style={styles.signUpLink}>Sign Up</Text>
            </TouchableOpacity>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor:"#fff"
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', 
    marginBottom: 20,
  },
  dottedBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dotted',
    padding: 16,
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 30,
    paddingLeft:15,
    fontSize:12
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 10,
    fontSize: 10,
    flexDirection:'row'
  },
  signUpLink: {
    color: 'red', 
    fontWeight: 'bold',
  },
  pStyle:{
    top:40,
    position:'absolute',
    zIndex:1, 
    left:19,
    backgroundColor:"#fff",
    width:68,
    textAlign:'center',
    fontSize:13
  }
});

export default LoginScreen;





