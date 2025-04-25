import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Image,
  Animated,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import MasonryList from '@react-native-seoul/masonry-list';
import ProductCard from '../components/ProductCard';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { ProductCardProps } from '../components/ProductCard';

import jacket from '../../assets/images/jacket.png';
import blackdress from '../../assets/images/blackdress.png';
import pinkdress from '../../assets/images/pinkdress.png';
import starryshirt from '../../assets/images/starryshirt.png';
import stylishlogo from '../../assets/images/stylishlogo.png';

type ProductListRouteProp = RouteProp<RootStackParamList, 'ProductList'>;
type NavigationProp = StackNavigationProp<RootStackParamList, 'ProductList'>;
const HEADER_HEIGHT = 58;

const ProductListScreen = () => {
  const route = useRoute<ProductListRouteProp>();
  const navigation = useNavigation<NavigationProp>();
  const { category } = route.params;

  const scrollY = useRef(new Animated.Value(0)).current;

  const translateHeader = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const translateSticky = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -HEADER_HEIGHT],
    extrapolate: 'clamp',
  });

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(event.nativeEvent.contentOffset.y);
  };

  const productData = [
    {
      id: '1',
      title: 'Black Winter...',
      description: 'Autumn And Winter Casual cotton-padded jacket...',
      price: '₹499',
      rating: 4.5,
      reviews: 6850,
      image: jacket,
    },
    {
      id: '2',
      title: 'Mens Starry',
      description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
      price: '₹399',
      rating: 4.7,
      reviews: 152344,
      image: blackdress,
    },
    {
      id: '3',
      title: 'Black Dress',
      description: 'Solid Black Dress for Women, Sexy Chain Shorts Ladi...',
      price: '₹2000',
      rating: 4.8,
      reviews: 523456,
      image: pinkdress,
    },
    {
      id: '4',
      title: 'Pink Embroide...',
      description: 'EARTHEN Rose Pink Embroidered Tiered Maxi...',
      price: '₹1900',
      rating: 4.6,
      reviews: 45678,
      image: starryshirt,
    },
    {
    id: '5',
    title: 'Black Winter...',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    rating: 4.5,
    reviews: 6850,
    image: jacket,
  },
  {
    id: '6',
    title: 'Mens Starry',
    description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
    price: '₹399',
    rating: 4.7,
    reviews: 152344,
    image: blackdress,
  },
  {
    id: '7',
    title: 'Mens Starry',
    description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
    price: '₹399',
    rating: 4.7,
    reviews: 152344,
    image: blackdress,
  },
  {
    id: '8',
    title: 'Black Dress',
    description: 'Solid Black Dress for Women, Sexy Chain Shorts Ladi...',
    price: '₹2000',
    rating: 4.8,
    reviews: 523456,
    image: pinkdress,
  },
  {
    id: '9',
    title: 'Pink Embroide...',
    description: 'EARTHEN Rose Pink Embroidered Tiered Maxi...',
    price: '₹1900',
    rating: 4.6,
    reviews: 45678,
    image: starryshirt,
  },
  {
    id: '10',
    title: 'Black Winter...',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    rating: 4.5,
    reviews: 6850,
    image: jacket,
  },
  {
    id: '11',
    title: 'Mens Starry',
    description: 'Mens Starry Sky Printed Shirt 100% Cotton Fabric',
    price: '₹399',
    rating: 4.7,
    reviews: 152344,
    image: blackdress,
  },
  {
    id: '12',
    title: 'Black Winter...',
    description: 'Autumn And Winter Casual cotton-padded jacket...',
    price: '₹499',
    rating: 4.5,
    reviews: 6850,
    image: jacket,
  },
   
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, { transform: [{ translateY: translateHeader }] }]}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>  
            <Ionicons name="arrow-back" size={26} color="black" />
          </TouchableOpacity>

          <Image source={stylishlogo} style={styles.logo} />

          <TouchableOpacity>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.profileIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.View style={[styles.stickyContainer, { transform: [{ translateY: translateSticky }] }]}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.iconLeft} />
          <TextInput
            placeholder="Search any Product..."
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
          <Ionicons name="mic-outline" size={22} color="gray" style={styles.iconRight} />
        </View>
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>{category} - 52,082+ Items</Text>
          <View style={styles.sortFilterContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sort</Text>
              <FontAwesome name="sort" size={14} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Filter</Text>
              <MaterialIcons name="filter-list" size={16} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <MasonryList<ProductCardProps>
          data={productData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 170, paddingHorizontal: 8, paddingBottom: 20 }}
          renderItem={({ item }) => <ProductCard {...item} />}
          onScroll={onScroll}
          scrollEventThrottle={16}
        />
    </SafeAreaView>
  );
};
export default ProductListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: HEADER_HEIGHT,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'center',
    zIndex: 1000,
    position: 'absolute',
    width: '100%',
    top: 0,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  stickyContainer: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingTop: HEADER_HEIGHT,
    paddingBottom: 10,
    position: 'absolute',
    width: '100%',
    zIndex: 999,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 3,
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  iconLeft: {
    marginRight: 5,
  },
  iconRight: {
    marginLeft: 5,
  },
  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sortFilterContainer: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 6,
  },
});


