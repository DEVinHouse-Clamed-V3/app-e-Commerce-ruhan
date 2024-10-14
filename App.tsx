import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductPage from './src/pages/products/ProductPage';
import CartPage from './src/pages/cart/CartPage';
import { CartProvider } from './src/context/CartContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductPage">
          <Stack.Screen 
            name="ProductPage" 
            component={ProductPage} 
            options={{ title: 'Lista de Produtos' }} 
          />
          <Stack.Screen 
            name="CartPage" 
            component={CartPage} 
            options={{ title: 'Carrinho' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
