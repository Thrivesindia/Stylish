import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {CartItem, RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, "CartScreen">;

const CartScreen: React.FC<Props> = ({ route }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (route.params?.cartItems) {
      setCartItems(route.params.cartItems);
    }
  }, [route.params?.cartItems]);

  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);


  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemVariant}>Variations: {item.variant}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating} ⭐</Text>
          <Text style={styles.discount}>
            {(((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(0)}% off
          </Text>
        </View>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressBox}>
          <Text style={styles.addressText}>
            216 St Paul's Rd, London N1 2LL, UK
          </Text>
          <TouchableOpacity>
            <Text style={styles.editText}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Shopping List Section */}
      <Text style={styles.sectionTitle}>Shopping List</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      {/* Total Order Section */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total Order ({cartItems.length}):</Text>
        <Text style={styles.totalPrice}>Rs.{totalPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addressContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addressBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  addressText: {
    fontSize: 14,
    color: '#333',
  },
  editText: {
    fontSize: 16,
    color: '#007AFF',
  },
  list: {
    flexGrow: 0,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemVariant: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    marginRight: 8,
  },
  discount: {
    fontSize: 14,
    color: '#FF6347',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CartScreen;