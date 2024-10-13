import React, { useState } from 'react';
import { View, Text, FlatList, Image, Button, StyleSheet } from 'react-native';
import ProductCard from '../../component/ProductCard';
import { useNavigation } from '@react-navigation/native';

const products = [
  { id: '1', name: 'Camisa', price: 29.99, image: 'https://esportelegal.fbitsstatic.net/img/p/camisa-umbro-avai-i-2023-24-juvenil-122854/439961-1.jpg?w=800&h=800&v=no-change&qs=ignore' },
  { id: '2', name: 'Calça', price: 49.99, image: 'https://esportelegal.fbitsstatic.net/img/p/calca-umbro-avai-viagem-2023-masculina-122276/438081-1.jpg?w=800&h=800&v=no-change&qs=ignore' },
  { id: '3', name: 'Tênis', price: 89.99, image: 'https://images.tcdn.com.br/img/img_prod/711830/tenis_feminino_running_revolution_6_nike_dc3729_esportivo_confortavel_10673_1_59fcd7faa59a696307ffd62aa1307086.jpg' },
  { id: '4', name: 'Jaqueta', price: 99.99, image: 'https://static.ativaesportes.com.br/public/ativaesportes/imagens/produtos/jaqueta-m-evostripe-core-full-zip-40976.jpg' },
  { id: '5', name: 'Boné', price: 19.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpJXLrGSnbyU-MLdi9HonJTkynpaKZzro4g&s' },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const handleAddCart = (item) => {
    setCart([...cart, item]); 
    alert(`${item.name} adicionado ao carrinho!`);
  };

  const renderProduct = ({ item }) => (
    <ProductCard
      name={item.name}
      price={item.price}
      image={item.image}
      onAddToCart={() => handleAddCart(item)}
    />
  );

  return (
    <View style={styles.container}>
      <Button title="Ver Carrinho" onPress={() => navigation.navigate('CartPage')} />
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
});

export default ProductPage;
