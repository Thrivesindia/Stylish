import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
  discount: string;
  rating: number;
  reviews: string;
  image: any;
}

const products: Product[] = [
  {
    id: "1",
    name: "Women Printed Kurta",
    price: "₹1500",
    discount: "40% off",
    rating: 4.5,
    reviews: "56,890",
    image: require("../../assets/images/watch.png"), 
  },
  {
    id: "2",
    name: "HRX by Hrithik Roshan",
    price: "₹2499",
    discount: "50% off",
    rating: 4.3,
    reviews: "34,467",
    image: require("../../assets/images/shoes1.png"),
  },
  {
    id: "3",
    name: "Nike Air Max",
    price: "₹3999",
    discount: "30% off",
    rating: 4.6,
    reviews: "45,789",
    image: require("../../assets/images/kurta.png"),
},

{
    id: "4",
    name: "Adidas Ultraboost",
    price: "₹5599",
    discount: "20% off",
    rating: 4.7,
    reviews: "28,634",
    image: require("../../assets/images/shoes.png"),
},

];

const ProductListSection: React.FC = () => {
  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>{item.price} <Text style={styles.discount}>{item.discount}</Text></Text>
          <Text style={styles.rating}>⭐ {item.rating} ({item.reviews})</Text>
        </TouchableOpacity>
      )}
    />
  );
};



const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    margin: 8,
    width: 180,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  discount: {
    fontSize: 12,
    color: "red",
    marginLeft: 5,
  },
  rating: {
    fontSize: 12,
    color: "gray",
  },
});

export default ProductListSection;
