import React, { useRef, useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Product {
  id: string;
  image: any;
}

const products: Product[] = [
  { id: "1", image: require("../../assets/images/banner1.jpeg") },
  { id: "2", image: require("../../assets/images/banner2.jpeg") },
  { id: "3", image: require("../../assets/images/banner3.jpeg") },
  { id: "4", image: require("../../assets/images/banner4.png") },
];

const Banner: React.FC = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % products.length;
        flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
        return nextIndex;
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <FlatList
      ref={flatListRef}
      data={products}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.banner}>
          <Image source={item.image} style={styles.image} />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 0.5,
    margin: 8,
    width: 340,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 340,
    height: 120,
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default Banner;
