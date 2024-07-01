import React, { useContext } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-elements';
import { CartContext } from './Cartcontext';

const { width } = Dimensions.get('window');

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty</Text>
      ) : (
        cartItems.map(item => (
          <Card containerStyle={styles.card} key={item.id}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
              <Text style={styles.productPrice}>₹{item.price}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </Card>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,
    color: '#666',
  },
  card: {
    width: width * 0.9,
    margin: 10,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 5,
  },
  productDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 5,
    color: '#007BFF',
  },
  removeButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CartPage;
