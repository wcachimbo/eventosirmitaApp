
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductListScreen from '../screens/ProductListScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import OrderListScreen from '../screens/OrderListScreen';
import { useCart } from '../context/CartContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { cart } = useCart();
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="ProductList"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTintColor: '#ecf0f1',
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
                <View style={styles.headerButtonContainer}>
                  <TouchableOpacity 
                    style={styles.headerButton} 
                    onPress={() => navigation.navigate('ShoppingCart')}>
                    <Text style={styles.headerButtonText}>🛒</Text>
                  </TouchableOpacity>
                  {cart.length > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{cart.length}</Text>
                    </View>
                  )}
                </View>
                <TouchableOpacity 
                  style={styles.headerButton} 
                  onPress={() => navigation.navigate('OrderList')}>
                  <Text style={styles.headerButtonText}>📋</Text>
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
    headerButtonContainer: {
        position: 'relative',
    },
    headerButton: {
        marginHorizontal: 2,
        padding: 8,
    },
    headerButtonText: {
        color: '#ecf0f1',
        fontSize: 18,
        fontWeight: 'bold',
    },
    badge: {
        position: 'absolute',
        top: -2,
        right: -2,
        backgroundColor: 'red',
        borderRadius: 10,
        width: 18,
        height: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    }
});

export default AppNavigator;
