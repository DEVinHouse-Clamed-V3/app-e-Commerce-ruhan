import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductPage from './src/pages/products/ProductPage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductPage">
        <Stack.Screen name="ProductPage" component={ProductPage} options={{ title: 'Lista de Produtos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

