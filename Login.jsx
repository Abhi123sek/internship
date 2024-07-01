import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Dimensions, ImageBackground, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const image = require('../assets/Pink and Black Modern Initials Logo Design.png');
const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setAlertMessage('Please enter both username and password.');
      setShowAlert(true);
    } else {
      // Perform login logic here
      setAlertMessage('Login Success. Redirecting to main app...');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigation.navigate('MainApp');
      }, 1000); // Change the timeout duration as needed
    }
  };

  const dismissAlert = () => {
    setShowAlert(false);
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/originals/a0/be/0f/a0be0fd240e1702620224350d3d40090.jpg' }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Card containerStyle={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.imageContainer}>
              <Image source={image} resizeMode="cover" style={styles.image}></Image>
            </View>
            <View style={styles.formContainer}>
              <TextInput
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={text => setUsername(text)}
              />
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity
                style={styles.roundButton}
                onPress={handleLogin}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
              <Text style={styles.down}>Don't have an account? Register</Text>
            </View>
          </View>
        </Card>
        {showAlert && (
          <View style={styles.alertContainer}>
            <TouchableOpacity onPress={dismissAlert} style={styles.alertDismissButton}>
              <Text style={styles.alertDismissText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.alertText}>{alertMessage}</Text>
          </View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '90%',
    maxWidth: 400,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardContent: {
    flexDirection: 'row',
    height: width * 0.6,
  },
  imageContainer: {
    flex: 0.75,
    backgroundColor: '#ddd',
  },
  image: {
    width: '112%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    flex: 0.75,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 5,
    width: '110%',
  },
  roundButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  down: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
  alertContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  alertDismissButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
  alertDismissText: {
    color: 'white',
    fontSize: 18,
  },
  alertText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
});

export default LoginScreen;
