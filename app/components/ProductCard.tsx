import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types'; 



export type ProductCardProps = {
  id: string;
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: any;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductDetail'>;

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  price,
  rating,
  reviews,
  image,
}) => {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = () => {
    navigation.navigate('ProductDetail', {
      product: {
        id,
        title,
        description,
        price,
        rating,
        ratingCount: reviews.toString(), 
        image: typeof image === 'number' ? Image.resolveAssetSource(image).uri : image,
        
      },
    });
  };

  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    return (
      <View style={styles.starsRow}>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesome key={`full-${index}`} name="star" size={14} color="#FFD700" />
        ))}
        {halfStar && <FontAwesome name="star-half-empty" size={14} color="#FFD700" />}
        {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, index) => (
          <FontAwesome key={`empty-${index}`} name="star-o" size={14} color="#FFD700" />
        ))}
      </View>
    );
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={typeof image === 'number' ? image : { uri: image }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Text style={styles.description} numberOfLines={2}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      <View style={styles.ratingRow}>
        {renderStars()}
        <Text style={styles.reviewsText}>{reviews.toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;


const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
    marginBottom: 2,
  },
  description: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starsRow: {
    flexDirection: 'row',
    marginRight: 6,
  },
  reviewsText: {
    fontSize: 12,
    color: '#999',
  },
  
});
