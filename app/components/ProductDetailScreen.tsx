import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { NativeStackScreenProps, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import ProductListScreen from "../components/productlist";

type Props = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

// Size options
const sizes = ['6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];

const ProductDetailScreen: React.FC<Props> = ({ route }) => {
  const { product } = route.params;
  const [selectedSize, setSelectedSize] = useState('7 UK');
  const [cartItems, setCartItems] = useState([]);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Render each similar product item in the grid
  const renderSimilarProduct = ({ item }) => (
    <View style={styles.similarItemContainer}>
      <Image source={{ uri: item.image }} style={styles.similarItemImage} />
      <Text style={styles.similarItemTitle}>{item.title}</Text>
      <View style={styles.similarPriceContainer}>
        <Text style={styles.similarPrice}>{item.price}</Text>
        <Text style={styles.similarOriginalPrice}>{item.originalPrice}</Text>
      </View>
      <View style={styles.similarRatingContainer}>
        {[...Array(item.rating)].map((_, index) => (
          <Text key={index} style={styles.similarStar}>★</Text>
        ))}
      </View>
    </View>
  );

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id || Date.now().toString(),
      name: product.title,
      variant: `Size: ${selectedSize} (${product.subtitle || 'All Colours'})`,
      rating: product.rating,
      price: parseFloat(product.price.replace('₹', '')) || 0,
      originalPrice: 2999,
      image: product.image,
    };

    console.log('CartItem:In Product Details', cartItem);

    // Update cartItems state and navigate after the update
    setCartItems((prevCartItems) => {
      const updatedCart = [...prevCartItems, cartItem];
      navigation.navigate('CartScreen', { cartItems: updatedCart });
      console.log('Added to cart:', cartItem); // Debugging
      return updatedCart;
    });
  };

  const handleBuyNow = () => {
    const orderTotal = parseFloat(product.price.replace('₹', '')) || 0;
    const shippingFee = 50; // Example shipping fee
    const totalWithShipping = orderTotal + shippingFee;

    navigation.navigate('Checkout', { orderTotal,shippingFee, totalWithShipping,
    });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Ionicons name="cart-outline" size={24} color="black" />
      </View>

      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.image} />

      {/* Size Selector */}
      <Text style={styles.sizeLabel}>Size: {selectedSize}</Text>
      <View style={styles.sizeContainer}>
        {sizes.map((size) => (
          <TouchableOpacity
            key={size}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.selectedSizeButton,
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && styles.selectedSizeText,
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product Title */}
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>Vision Alta Men’s Shoes Size (All Colours)</Text>

      {/* Rating */}
      <View style={styles.ratingContainer}>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.rating}>{product.rating}</Text>
        <Text style={styles.reviewCount}>({product.ratingCount})</Text>
      </View>

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.originalPrice}>₹2,999</Text>
        <Text style={styles.discountedPrice}>{product.price}</Text>
        <Text style={styles.discountLabel}>50% Off</Text>
      </View>

      {/* Product Description */}
      <Text style={styles.sectionTitle}>Product Details</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Tags */}
      <View style={styles.tags}>
        <View style={styles.tag}>
          <MaterialIcons name="location-pin" size={16} />
          <Text style={styles.tagText}>Nearest Store</Text>
        </View>
        <View style={styles.tag}>
          <MaterialIcons name="verified" size={16} />
          <Text style={styles.tagText}>VIP</Text>
        </View>
        <View style={styles.tag}>
          <MaterialIcons name="assignment-return" size={16} />
          <Text style={styles.tagText}>Return policy</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cartButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton} onPress={handleBuyNow}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryText}>Delivery in</Text>
        <Text style={styles.deliveryTime}>1 within Hour</Text>
      </View>

      {/* Similar To Section */}
      <View style={styles.similarSection}>
        <View style={styles.similarHeader}>
          <View style={styles.similarHeaderLeft}>
            <Text style={styles.similarHeaderTitle}>Similar To</Text>
            <Text style={styles.similarHeaderCount}>282+ Items</Text>
          </View>
          <View style={styles.similarHeaderRight}>
            <TouchableOpacity style={styles.similarButton}>
              <Text style={styles.similarButtonText}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.similarButton}>
              <Text style={styles.similarButtonText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ProductListScreen />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  sizeLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  sizeButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  selectedSizeButton: {
    backgroundColor: '#f88da0',
    borderColor: '#f88da0',
  },
  sizeText: {
    fontSize: 14,
    color: '#555',
  },
  selectedSizeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  star: {
    fontSize: 16,
    marginRight: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
  },
  reviewCount: {
    fontSize: 14,
    marginLeft: 6,
    color: '#888',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
    fontSize: 16,
  },
  discountedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  discountLabel: {
    fontSize: 14,
    color: 'red',
    fontWeight: '600',
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 6,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  tags: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 14,
    flexWrap: 'wrap',
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  tagText: {
    marginLeft: 4,
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  cartButton: {
    flex: 1,
    backgroundColor: '#1e4da1',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buyButton: {
    flex: 1,
    backgroundColor: '#28b67a',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deliveryInfo: {
    backgroundColor: '#ffe1e8',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  deliveryText: {
    color: '#444',
    fontSize: 14,
  },
  deliveryTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d63653',
  },
  similarSection: {
    marginTop: 10,
  },
  similarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  similarHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  similarHeaderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  similarHeaderCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  similarHeaderRight: {
    flexDirection: 'row',
  },
  similarButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  similarButtonText: {
    fontSize: 14,
    color: '#000',
  },
  similarRow: {
    justifyContent: 'space-between',
  },
  similarItemContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  similarItemImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  similarItemTitle: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
    height: 40,
  },
  similarPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  similarPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 5,
  },
  similarOriginalPrice: {
    fontSize: 14,
    color: '#666',
    textDecorationLine: 'line-through',
  },
  similarRatingContainer: {
    flexDirection: 'row',
  },
  similarStar: {
    fontSize: 14,
    color: '#FFD700',
  },
});

export default ProductDetailScreen;