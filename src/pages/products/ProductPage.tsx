import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';

const products = [
  { id: '1', name: 'Camisa', price: 29.99, image: 'https://esportelegal.fbitsstatic.net/img/p/camisa-umbro-avai-i-2023-24-juvenil-122854/439961-1.jpg?w=800&h=800&v=no-change&qs=ignore' },
  { id: '2', name: 'Calça', price: 49.99, image: 'https://esportelegal.fbitsstatic.net/img/p/calca-umbro-avai-viagem-2023-masculina-122276/438081-1.jpg?w=800&h=800&v=no-change&qs=ignore' },
  { id: '3', name: 'Tênis', price: 89.99, image: 'https://images.tcdn.com.br/img/img_prod/711830/tenis_feminino_running_revolution_6_nike_dc3729_esportivo_confortavel_10673_1_59fcd7faa59a696307ffd62aa1307086.jpg' },
  { id: '4', name: 'Jaqueta', price: 99.99, image: 'https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/jaqueta-m-evostripe-core-full-zip-40976.jpg' },
  { id: '5', name: 'Boné', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpJXLrGSnbyU-MLdi9HonJTkynpaKZzro4g&s' },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const handleAddCart = (item) => {
    setCart([...cart, item]); 
    alert(`${item.name} adicionado ao carrinho!`);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => handleAddCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
});

export default ProductPage;
