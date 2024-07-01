import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from './Cartcontext';

const UserProfile = () => {
  const navigation = useNavigation();
  const { cartItems } = useContext(CartContext);

  const goToCart = () => {
    navigation.navigate('Cart');
  };

  const goToSettings = () => {
    navigation.navigate('Settings');
  };

  const goToOrders = () => {
    navigation.navigate('Orders');
  };

  const goToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const goToAddresses = () => {
    navigation.navigate('Addresses');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://wallpaperaccess.com/full/2615131.jpg' }} // Replace with your profile picture URL
          style={styles.profileImage}
        />
        <Text style={styles.userName}>VIRAT KOHLI</Text>
        <Text style={styles.userEmail}>VK18@gmail.com</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.menuItem} onPress={goToOrders}>
          <AntDesign name="profile" size={24} color="#007BFF" />
          <Text style={styles.menuItemText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToWishlist}>
          <MaterialIcons name="favorite" size={24} color="#007BFF" />
          <Text style={styles.menuItemText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToAddresses}>
          <MaterialIcons name="location-on" size={24} color="#007BFF" />
          <Text style={styles.menuItemText}>Addresses</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToSettings}>
          <AntDesign name="setting" size={24} color="#007BFF" />
          <Text style={styles.menuItemText}>Account Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={goToCart}>
          <AntDesign name="shoppingcart" size={24} color="#007BFF" />
          <Text style={styles.menuItemText}>Cart ({cartItems.length})</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <AntDesign name="logout" size={24} color="#007BFF" />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEEAD',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FF6347',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  userEmail: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  body: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default UserProfile;
