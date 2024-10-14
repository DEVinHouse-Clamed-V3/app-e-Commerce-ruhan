import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CartItem from '../../component/CartItem'; 
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cartItems } = useCart();

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
