import React from 'react';
import { View, FlatList, StyleSheet, Alert, Button } from 'react-native';
import CartItem from '../../component/CartItem';
import { useCart } from '../../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const handleRemoveFromCart = (id: string) => {
    Alert.alert(
      'Remover produto',
      'Tem certeza que deseja remover este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Remover', onPress: () => removeFromCart(id) },
      ]
    );
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <CartItem
        name={item.name}
        price={item.price}
        image={item.image}
        quantity={item.quantity}
      />
      <Button color="#A91D3A" title="Remover do Carrinho" onPress={() => handleRemoveFromCart(item.id)} />
    </View>
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
    backgroundColor: '#EEEEEE',
  },
  itemContainer: {
    marginBottom: 20,
  },
});

export default CartPage;
