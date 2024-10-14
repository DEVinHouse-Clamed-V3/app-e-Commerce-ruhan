import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductCard = ({ name, price, image, onAddToCart }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      <Button color="#A91D3A" title="Adicionar ao Carrinho" onPress={onAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#151515',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 12,
    borderRadius: 60,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#151515',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#C73659',
    marginBottom: 8,
  },
});

export default ProductCard;
