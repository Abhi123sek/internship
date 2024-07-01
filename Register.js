// RegisterScreen.js
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Dimensions, ImageBackground, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import { BlurView } from 'expo-blur';
const image = require('../assets/Pink and Black Modern Initials Logo Design.png');
const { width } = Dimensions.get('window');

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    // Replace this with actual registration logic
    Alert.alert("Register", "Register button pressed");
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://i.pinimg.com/originals/a0/be/0f/a0be0fd240e1702620224350d3d40090.jpg' }} // Replace with your background image URL
      style={styles.background}
    >
      <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
       
          <Card containerStyle={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.imageContainer}>
              <Image source={image} resizeMode="cover" style={styles.image}></Image>
              </View>
              <View style={styles.formContainer}>
                <TextInput
                  placeholder="Username"
                  value={username}
                  onChangeText={setUsername}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Confirm Password"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  style={styles.input}
                />
                <TouchableOpacity
                  style={styles.roundButton}
                  onPress={handleRegister}
                >
                  <Text style={styles.buttonText}>Register</Text>
            
                </TouchableOpacity>
                  <Text style={styles.down}>Already have an account?Login</Text>
              </View>
            </View>
          </Card>
        
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
    backgroundColor: 'rgb(0,0,0,0.3)',
  
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
    height: 25,
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
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black',
  },
});




export default RegisterScreen;
