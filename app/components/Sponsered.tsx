import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const SponsoredCard = () => {
  return (
    <TouchableOpacity style={styles.card}>
      {/* Sponsored Label */}
      <Text style={styles.sponsoredText}>Sponserd</Text>

      {/* Product Image with overlay */}
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/sponsered.png')} // Adjust the path accordingly
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.overlayText}>
          <Text style={styles.upToText}>UP TO</Text>
          <Text style={styles.discountText}>50% OFF</Text>
        </View>
      </View>

      {/* Footer with arrow */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>up to 50% Off</Text>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SponsoredCard;

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  sponsoredText: {
    fontSize: 13,
    color: '#333',
    padding: 10,
    fontWeight: '500',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 180,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  overlayText: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  upToText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  discountText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  bottomText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#999',
  },
};
