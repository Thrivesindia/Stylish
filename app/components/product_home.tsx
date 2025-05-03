// import React from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   ImageSourcePropType,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackNavigationProp } from "@react-navigation/native-stack";


// type RootStackParamList = {
//   Home: undefined;
//   ProductList: { category: string };
//   ProductDetail: { product: Product };
//   CartScreen: { cartItems: ExtendedCartItem[] };
// };

// interface Product {
//   id: string;
//   title: string;
//   price: string;
//   discount: string;
//   rating: number;
//   ratingCount: string;
//   image: string; // Network URL for ProductDetailScreen
//   localImageSource: ImageSourcePropType; // Static require for Producthome
//   description?: string;
// }

// interface ExtendedCartItem extends Product {
//   variant: string;
//   originalPrice: number;
//   quantity: number;
// }

// const products: Product[] = [
//   {
//     id: "1",
//     title: "Women Printed Kurta",
//     price: "₹1500",
//     discount: "40% off",
//     rating: 4.5,
//     ratingCount: "56890",
//     image: "https://www.kindpng.com/imgv/iTwbbxb_mens-navy-blue-dupion-plain-short-kurta-png/", // Network URL for ProductDetailScreen
//     localImageSource: require("../../assets/images/kurta.png"), // Static require for Producthome
//     description: "Comfortable and stylish women’s printed kurta, perfect for casual and festive occasions.",
//   },
//   {
//     id: "2",
//     title: "HRX by Hrithik Roshan",
//     price: "₹2499",
//     discount: "50% off",
//     rating: 4.3,
//     ratingCount: "34467",
//     image: "https://www.kindpng.com/imgv/iTwbbxb_mens-navy-blue-dupion-plain-short-kurta-png/", // Network URL for ProductDetailScreen
//     localImageSource: require("../../assets/images/shoes.png"), // Static require for Producthome
//     description: "High-performance athletic shoes designed for comfort and durability.",
//   },
//   {
//     id: "3",
//     title: "Nike Air Max",
//     price: "₹3999",
//     discount: "30% off",
//     rating: 4.6,
//     ratingCount: "45789",
//     image: "https://www.kindpng.com/imgv/iTwbbxb_mens-navy-blue-dupion-plain-short-kurta-png/", // Network URL for ProductDetailScreen
//     localImageSource: require("../../assets/images/kurta.png"), // Static require for Producthome
//     description: "Iconic Nike Air Max shoes with superior cushioning and style.",
//   },
//   {
//     id: "4",
//     title: "Adidas Ultraboost",
//     price: "₹5599",
//     discount: "20% off",
//     rating: 4.7,
//     ratingCount: "28634",
//     image: 'https://www.kindpng.com/imgv/iTwbbxb_mens-navy-blue-dupion-plain-short-kurta-png/' , // Network URL for ProductDetailScreen
//     localImageSource: require("../../assets/images/shoes.png"), // Static require for Producthome
//     description: "Adidas Ultraboost shoes for ultimate running comfort and energy return.",
//   },
// ];

// const Producthome: React.FC = () => {
//   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
//   console.log('Producthome all products here from Home screens:', products);

//   return (
//     <FlatList
//       data={products}
//       keyExtractor={(item) => item.id}
//       numColumns={2}
//       columnWrapperStyle={styles.row}
//       renderItem={({ item }) => (
//         <TouchableOpacity
//           style={styles.card}
//           onPress={() => navigation.navigate("ProductDetail", { product: item })}
//         >
//           {/* Use the preloaded localImageSource */}
//           <Image source={item.localImageSource} style={styles.image} />
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.price}>
//             {item.price} <Text style={styles.discount}>{item.discount}</Text>
//           </Text>
//           <Text style={styles.rating}>⭐ {item.rating} ({item.ratingCount})</Text>
//         </TouchableOpacity>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   row: {
//     justifyContent: "space-between",
//     paddingHorizontal: 8,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 8,
//     margin: 3,
//     width: "49%",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   image: {
//     width: "100%",
//     height: 120,
//     borderRadius: 8,
//     resizeMode: "cover",
//   },
//   title: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginVertical: 4,
//     textAlign: "center",
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "#000",
//     textAlign: "center",
//   },
//   discount: {
//     fontSize: 12,
//     color: "red",
//   },
//   rating: {
//     fontSize: 12,
//     color: "gray",
//     textAlign: "center",
//   },
// });

// export default Producthome;

import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import jacket from '../../assets/images/jacket.png';
import blackdress from '../../assets/images/blackdress.png';
import pinkdress from '../../assets/images/pinkdress.png';
import starryshirt from '../../assets/images/starryshirt.png';
import stylishlogo from '../../assets/images/stylishlogo.png';

type RootStackParamList = {
  Home: undefined;
  ProductList: { category: string };
  ProductDetail: { product: Product };
  CartScreen: { cartItems: ExtendedCartItem[] };
};

interface Product {
  id: string;
  title: string;
  price: string;
  discount: string;
  rating: number;
  ratingCount: string;
  image: string; // Network URL for ProductDetailScreen
  localImageSource: ImageSourcePropType; // Static require for Producthome
  reviews: string;
  description?: string;
}

interface ExtendedCartItem extends Product {
  variant: string;
  originalPrice: number;
  quantity: number;
}



const products: Product[] = [
  {
    id: "1",
    title: "Women Printed Kurta",
    price: "₹1500",
    discount: "40% off",
    rating: 4.5,
    ratingCount: "56890",
    image: "https://thrivesindia.com/Stylish/kurtidress.jpg", // Valid image URL
    localImageSource: require("../../assets/images/kurtidress.jpg"), // Static require for Producthome
    description: "Comfortable and stylish women’s printed kurta, perfect for casual and festive occasions.",
    reviews: "56890",
  },
  {
    id: "2",
    title: "Men's Hoodie",
    price: "₹2499",
    discount: "50% off",
    rating: 4.3,
    ratingCount: "34467",
    image: "https://thrivesindia.com/Stylish/jacket.png", // Valid image URL
    localImageSource: require("../../assets/images/jacket.png"), // Static require for Producthome
    description: "High-performance athletic shoes designed for comfort and durability.",
    reviews: "34467",
  },
  {
    id: "3",
    title: "Kurti Punjabi Printed",
    price: "₹3999",
    discount: "30% off",
    rating: 4.6,
    ratingCount: "45789",
    image: "https://thrivesindia.com/Stylish/kurta.png", // Valid image URL
    localImageSource: require("../../assets/images/kurta.png"), // Static require for Producthome
    description: "Iconic Nike Air Max shoes with superior cushioning and style.",
    reviews: "45789",
  },
  {
    id: "4",
    title: "Adidas Ultraboost",
    price: "₹5599",
    discount: "20% off",
    rating: 4.7,
    ratingCount: "28634",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60", // Valid image URL
    localImageSource: require("../../assets/images/shoes.png"), // Static require for Producthome
    description: "Adidas Ultraboost shoes for ultimate running comfort and energy return.",
    reviews: "28634",
  },
];

const Producthome: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  console.log('Producthome all products here:', products);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={styles.row}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("ProductDetail", { product: item })}
        >
          {/* Use the preloaded localImageSource */}
          <Image source={item.localImageSource} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>
            {item.price} <Text style={styles.discount}>{item.discount}</Text>
          </Text>
          <Text style={styles.rating}>⭐ {item.rating} ({item.ratingCount})</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    margin: 3,
    width: "49%",
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
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  discount: {
    fontSize: 12,
    color: "red",
  },
  rating: {
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});

export default Producthome;