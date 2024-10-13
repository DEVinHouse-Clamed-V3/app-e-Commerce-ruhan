import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CartItem from '../../component/CartItem'; 


const initialCartItems = [
  { id: '1', name: 'Camisa', price: 29.99, image: 'https://esportelegal.fbitsstatic.net/img/p/camisa-umbro-avai-i-2023-24-juvenil-122854/439961-1.jpg?w=800&h=800&v=no-change&qs=ignore', quantity: 1 },
  { id: '2', name: 'Calça', price: 49.99, image: 'https://esportelegal.fbitsstatic.net/img/p/calca-umbro-avai-viagem-2023-masculina-122276/438081-1.jpg?w=800&h=800&v=no-change&qs=ignore', quantity: 2 },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const renderCartItem = ({ item }) => (
    <CartItem 
      name={item.name} 
      price={item.price} 
      image={item.image} 
      quantity={item.quantity} 
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});

export default CartPage;
