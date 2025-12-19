
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ShoppingCartScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Nuevo Pedido</Text>

      {/* Aquí iría la lista de productos seleccionados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Productos Seleccionados</Text>
        {/* <Text>Mesa redonda x2</Text> */}
        {/* <Text>Silla de plástico x10</Text> */}
        <Text style={styles.placeholder}>Añade productos desde la lista principal.</Text>
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
        <Text style={styles.totalText}>Total a Pagar: $0.00</Text>
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
