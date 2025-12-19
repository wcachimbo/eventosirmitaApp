
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductListScreen from '../screens/ProductListScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import OrderListScreen from '../screens/OrderListScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="ProductList"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#007bff',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Stack.Screen 
          name="ProductList"
          component={ProductListScreen}
          options={({ navigation }) => ({
            title: 'Productos',
            headerRight: () => (
              <>
                <TouchableOpacity 
                  style={styles.headerButton} 
                  onPress={() => navigation.navigate('ShoppingCart')}>
                  <Text style={styles.headerButtonText}>Tienda</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.headerButton} 
                  onPress={() => navigation.navigate('OrderList')}>
                  <Text style={styles.headerButtonText}>Pedidos</Text>
                </TouchableOpacity>
              </>
            ),
          })}
        />
        <Stack.Screen 
          name="ShoppingCart"
          component={ShoppingCartScreen} 
          options={{ title: 'Crear Pedido' }} 
        />
        <Stack.Screen 
          name="OrderList"
          component={OrderListScreen} 
          options={{ title: 'Pedidos Guardados' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    headerButton: {
        marginHorizontal: 8,
        padding: 8,
    },
    headerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default AppNavigator;
