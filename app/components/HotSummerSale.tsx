import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const HotSummerSaleBanner = () => {
  return (
    <View style={styles.hotSaleContainer}>
      <Image
        source={require('../../assets/images/HotSummer.png')} // update path as per your folder
        style={styles.bannerImage}
        resizeMode="cover"
      />
      <View style={styles.hotSaleTextContainer}>
        <View>
          <Text style={styles.newArrivalsTitle}>New Arrivals</Text>
          <Text style={styles.newArrivalsSubtitle}>Summer’ 25 Collections</Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View all →</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HotSummerSaleBanner;

const styles = {
  hotSaleContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 10,
    marginTop: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  bannerImage: {
    width: '100%',
    height: 180,
  },
  hotSaleTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: '#fff',
  },
  newArrivalsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  newArrivalsSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  viewAllButton: {
    backgroundColor: '#f50057',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  viewAllText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
};
