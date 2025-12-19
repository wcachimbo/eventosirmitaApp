
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Datos de ejemplo. Más adelante, estos vendrán de los pedidos guardados.
const fakeOrders = [
  {
    id: '1',
    customerName: 'Juan Perez',
    address: 'Calle Falsa 123',
  },
  {
    id: '2',
    customerName: 'Maria Gomez',
    address: 'Avenida Siempre Viva 456',
  },
];

const OrderListScreen = () => {

  const renderItem = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.customerName}>{item.customerName}</Text>
      <Text style={styles.address}>{item.address}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={fakeOrders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>Aún no hay pedidos guardados.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  orderContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  customerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  address: {
      fontSize: 14,
      color: '#555',
  }
});

export default OrderListScreen;
