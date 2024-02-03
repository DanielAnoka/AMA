import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCreateAccount = () => {
    // Your account creation logic 
    if (!isChecked) {
      Alert.alert('Agreement required', 'Please agree to the terms and privacy policy.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password mismatch', 'Passwords do not match. Please try again.');
    } else {
      // Perform account creation with name, email, and password
      Alert.alert('Account Created', 'Your account has been successfully created.');
    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signUpText}>Sign Up</Text>
      <View style={styles.dottedBox}>
        <Text style={styles.pStyle}>Name</Text>
        <TextInput
          style={{...styles.input, marginTop: 50,}}
          placeholder="Your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <View>
          <Text style={{...styles.pStyle, top:-10, left:9}}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="abc@gmail.com"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View>
          <Text style={{...styles.pStyle, top:-10, left:9, width:79}}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View>
          <Text style={{...styles.pStyle, top:-10, left:9, width:125}}> Confirm Password</Text>
          <TextInput
            style={{...styles.input, marginBottom: 0}}
            placeholder="********"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

      </View>
      <View style={styles.checkboxContainer}>
        {/* <CheckBox
          value={isChecked}
          onValueChange={() => setIsChecked(!isChecked)}
        /> */}
        <Text style={styles.checkboxText}>
          By creating account, you agree to our{' '}
          <Text style={styles.termsText}>terms</Text> and{' '}
          <Text style={styles.privacyText}>privacy policy</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16, justifyContent: 'center' }}>
          <Text style={{ fontSize: 15 }}>Already have an account? </Text>
          <TouchableOpacity onPress={navigateToLogin}>
            <Text style={{ color: 'red', textDecorationLine: 'none', fontSize: 15 }}>Log in</Text>
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
    backgroundColor: "#fff"
  },
  dottedBox: {
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: 'dotted', 
    padding: 16,
    width: '100%',
    marginBottom: 5,
  },
  signUpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red', 
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
  createAccountButton: {
    backgroundColor: 'red', 
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  checkboxText: {
    fontSize: 10,
    marginLeft: 10,
  },
  termsText: {
    color: 'gold',
  },
  privacyText: {
    color: 'gold',
  },
  loginText: {
    marginTop: 10,
    fontSize: 10,
    flexDirection:'row'
  },
  loginLink: {
    color: 'red',
    fontWeight: 'bold',
  },
  pStyle:{
    top:55,
    position:'absolute',
    zIndex:1, 
    left:25,
    backgroundColor:"#fff",
    width:50,
    textAlign:'center',
    fontSize:13
  }
});

export default SignUpScreen;
