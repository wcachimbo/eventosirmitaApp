
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { useCart } from '../context/CartContext';

const ShoppingCartScreen = ({ navigation }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, setQuantity, updatePrice } = useCart();

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartItemImage} />
      <View style={styles.cartItemInfo}>
        <Text style={styles.cartItemName}>{item.name}</Text>
        <View style={styles.quantityControls}>
          <TextInput
            style={styles.quantityInput}
            value={item.quantity.toString()}
            onChangeText={(text) => setQuantity(item.id, text)}
            keyboardType="numeric"
          />
        </View>
        <Text>Valor unitario: </Text>
        <TextInput
          style={styles.priceInput}
          value={item.price.toString()}
          onChangeText={(text) => updatePrice(item.id, text)}
          keyboardType="numeric"
        />
        <Text>Total: ${(item.price * item.quantity).toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
        <Text style={styles.removeButtonText}>Quitar</Text>
      </TouchableOpacity>
    </View>
  );

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return (
    <ScrollView style={styles.container}>

      {/* Aquí iría la lista de productos seleccionados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos Seleccionados</Text>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
          />
        ) : (
          <Text style={styles.placeholder}>Añade productos desde la lista principal.</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Datos del Cliente</Text>
        <TextInput
          placeholder="Nombre del Cliente"
          style={styles.input}
        />
        <TextInput
          placeholder="Celular"
          style={styles.input}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Dirección"
          style={styles.input}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Detalles del Pedido</Text>
        <TextInput
          placeholder="Fecha de Entrega (DD/MM/AAAA)"
          style={styles.input}
        />
        {/* Opciones de pago */}
        <View style={styles.paymentOptions}>
            <TouchableOpacity style={[styles.paymentButton, styles.selectedPayment]}>
                <Text style={styles.paymentButtonText}>Pago Total</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonText}>Pago Parcial</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.totalText}>Total a Pagar: ${total.toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Guardar Pedido</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  placeholder: {
    color: '#888',
    fontStyle: 'italic',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  cartItemImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  cartItemInfo: {
    flex: 1,
  },
  cartItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonColumn: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  quantityButton: {
    backgroundColor: '#3498db',
    padding: 2,
    borderRadius: 3,
    marginVertical: 1,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: 50,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  priceInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: 60,
    textAlign: 'center',
  },  removeButton: {
    backgroundColor: '#dc3545',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  paymentOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  paymentButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  selectedPayment: {
      backgroundColor: '#d4edda', // Un verde claro
      borderColor: '#c3e6cb',
  },
  paymentButtonText: {
    fontSize: 16,
  },
  totalText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'right',
      marginTop: 10,
  },
  saveButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShoppingCartScreen;
