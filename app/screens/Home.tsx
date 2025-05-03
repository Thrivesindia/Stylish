import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import ProductListScreen from "../components/productlist";
import Banner from "../components/banner";
import Producthome from "../components/product_home";
import HotSummerSaleBanner from '../components/HotSummerSale';
import SponsoredCard from "../components/Sponsered";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from '@react-navigation/stack';


import beauty from "../../assets/images/beauty.png";
import fashion from "../../assets/images/fashion.png";
import kids from "../../assets/images/kids.png";
import mens from "../../assets/images/mens.png";
import womens from "../../assets/images/womens.png";
import stylishlogo from "../../assets/images/stylishlogo.png";
import { Product, RootStackParamList } from "../types"; 


type RootStackParamList = {
  ProductList: { category: string };
};

type CategoryName = 'Beauty' | 'Fashion' | 'Kids' | 'Mens' | 'Womens';

const categoryImages: Record<CategoryName, any> = {
  Beauty: beauty,
  Fashion: fashion,
  Kids: kids,
  Mens: mens,
  Womens: womens,
};


const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleCategoryPress = (category: string) => {
    navigation.navigate("ProductList", { category });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTopRow}>
          <TouchableOpacity>
            <Ionicons name="menu" size={26} color="black" />
          </TouchableOpacity>

          <Image source={stylishlogo} style={styles.logo} />

          <TouchableOpacity>
            <Image source={require("../../assets/images/logo.png")} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.iconLeft} />
          <TextInput
            placeholder="Search any Product..."
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
          <Ionicons name="mic-outline" size={22} color="gray" style={styles.iconRight} />
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingTop: 110 }}>
        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>All Featured</Text>
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

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          {(Object.keys(categoryImages) as CategoryName[]).map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryItem}
              onPress={() => handleCategoryPress(category)}
            >
              <Image
                source={categoryImages[category]}
                style={styles.categoryImage}
              />
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Banner />
        <Producthome />

        <View style={styles.dealContainer}>
          <Text style={styles.dealTitle}>Deal of the Day</Text>
          <View style={styles.timerRow}>
            <FontAwesome name="clock-o" size={14} color="white" />
            <Text style={styles.dealTimer}> 22h 55m 20s remaining</Text>
          </View>
          <TouchableOpacity style={styles.dealButton} onPress={() => navigation.navigate("ProductList", { category: "Deals" })}>
            <Text style={styles.dealButtonText}>View all →</Text>
          </TouchableOpacity>
        </View>

        <ProductListScreen />

        <View style={styles.specialOfferContainer}>
          <Image
            source={require("../../assets/images/offers.png")}
            style={styles.specialOfferImage}
          />
          <View>
            <Text style={styles.specialOfferTitle}>Special Offers 🎉</Text>
            <Text style={styles.specialOfferText}>
              We make sure you get the offer you need at best prices.
            </Text>
          </View>
        </View>

        {/* Flat & Heels Card */}
        <View style={{ padding: 10 }}>
          <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 5, elevation: 3, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' }}>
            <View style={{ position: 'relative', width: 120, height: 100 }}>
              <Image 
                source={require("../../assets/images/dots.png")} 
                style={{ position: 'absolute', width: 100, height: 100, resizeMode: 'contain', left: -30}} 
              />
              <Image 
                source={require("../../assets/images/hill.png")} 
                style={{ width: 120, height: 100, resizeMode: 'contain', position: 'absolute', left: 0}} 
              />
              <Image 
                source={require("../../assets/images/pipe.png")} 
                style={{ width: 100, height: 120, resizeMode: 'contain', left: -51.25 }} 
              />
            </View>

            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', marginLeft:25 }}>Flat and Heels</Text>
              <Text style={{ fontSize: 12, color: '#777' }}>Stand a chance to get rewarded</Text>
              <TouchableOpacity style={{ backgroundColor: '#FF4D6D', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginLeft:70 }}onPress={() => navigation.navigate("ProductList", { category: "Specialoffer" })}>
                <Text style={{ color: 'white', fontSize: 14, fontWeight: 'bold' }}>Visit now</Text>
                <Text style={{ color: 'white', marginLeft: 5 }}>→</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Card */}
          <View style={{ backgroundColor: '#FF4D6D', borderRadius: 10, padding: 15, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Trending Products</Text>
              <Text style={{ fontSize: 12, color: 'white', opacity: 0.8 }}>📅 Last Date 29/02/22</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 5, paddingVertical: 8, paddingHorizontal: 15 }}onPress={() => navigation.navigate("ProductList", { category: "Tranding" })}onPress={() => navigation.navigate("ProductList", { category: "NewArrivals" })}>
              <Text style={{ color: '#FF4D6D', fontSize: 14, fontWeight: 'bold' }}>View all →</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ProductListScreen />
        
        <HotSummerSaleBanner />
        <SponsoredCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerTopRow: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 15,
    height: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "95%", 
    alignSelf: "center", 
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 45,
    width: "90%",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  featuredContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sortFilterContainer: {
    flexDirection: "row",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 6,
  },
  categoryContainer: {
    flexDirection: "row",
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 20,
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
  },
  dealContainer: {
    backgroundColor: "#2196F3",
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 10,
    marginTop: 12,
  },
  dealTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  timerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  dealTimer: {
    color: "white",
    fontSize: 14,
    marginLeft: 5,
  },
  dealButton: {
    backgroundColor: "white",
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  dealButtonText: {
    color: "#2196F3",
    fontWeight: "bold",
  },
  specialOfferContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginTop: 12,
    elevation: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
     
  },
  specialOfferImage: { width: 50, height: 50, marginRight: 10 },
  specialOfferTextContainer: {
    flex: 1, 
  }, 
  specialOfferTitle: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  specialOfferText: { 
    fontSize: 13, 
    color: "gray", 
    flexWrap: "wrap",
    maxWidth: "95%", 
  },
});

export default HomeScreen;



