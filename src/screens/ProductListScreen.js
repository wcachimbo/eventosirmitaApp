
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductListScreen = ({ navigation }) => {
  const { addToCart, cart, removeFromCart } = useCart();

  const renderItem = ({ item }) => {
    const isInCart = cart.some(cartItem => cartItem.id === item.id);
    return (
      <View style={styles.productContainer}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.priceQuantityRow}>
          <Text style={styles.priceText}>Valor unitario: ${item.price.toFixed(2)}</Text>
          <View style={styles.quantityButtonRow}>
            <Text style={styles.quantityText}>Disponibles: {item.quantity}</Text>
            <TouchableOpacity style={[styles.addButton, isInCart && styles.removeButton]} onPress={isInCart ? () => removeFromCart(item.id) : () => addToCart(item)}>
              <Text style={styles.addButtonText}>{isInCart ? 'X' : '+'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  productContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    margin: 5,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  priceQuantityRow: {
    alignItems: 'center',
    width: '100%',
  },
  priceText: {
    marginBottom: 5,
    textAlign: 'left',
    width: '100%',
  },
  quantityButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  quantityText: {
    textAlign: 'left',
    flex: 1,
  },
  addButton: {
    backgroundColor: '#27ae60',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 20
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  removeButton: {
    backgroundColor: '#e74c3c',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
});

export default ProductListScreen;
