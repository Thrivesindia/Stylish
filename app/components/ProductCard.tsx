import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Props = {
  title: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: any;
};

const ProductCard: React.FC<Props> = ({
  title,
  description,
  price,
  rating,
  reviews,
  image,
}) => {
  // Round off to nearest half-star logic
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
    <View style={styles.card}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {description}
      </Text>

      <Text style={styles.price}>{price}</Text>

      <View style={styles.ratingRow}>
        {renderStars()}
        <Text style={styles.reviewsText}>{reviews.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin:3,
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
