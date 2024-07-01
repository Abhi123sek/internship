// CartBadge.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CartContext } from './Cartcontext';

const CartBadge = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{cartItems.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default CartBadge;
