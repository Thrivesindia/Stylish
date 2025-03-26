// import React from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import ProductListScreen from "../components/productlist"; // Import Product List Component
import specialOffer from "../../assets/images/specialoffer.png";

// Import images
import beauty from "../../assets/images/beauty.png";
import fashion from "../../assets/images/fashion.png";
import kids from "../../assets/images/kids.png";
import mens from "../../assets/images/mens.png";
import womens from "../../assets/images/womens.png";
import stylishlogo from "../../assets/images/stylishlogo.png";

const categoryImages = {
  Beauty: beauty,
  Fashion: fashion,
  Kids: kids,
  Mens: mens,
  Womens: womens,
};

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={26} color="black" />
        </TouchableOpacity>

        <Image source={stylishlogo} style={styles.logo} />

        <TouchableOpacity>
          <Image source={require("../../assets/images/logo.png")} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search any Product..." style={styles.searchInput} />
      </View>

      {/* Featured Section */}
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

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {Object.keys(categoryImages).map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryItem}>
            <Image source={categoryImages[category]} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>50-40% OFF</Text>
        <Text style={styles.bannerSubtitle}>Now in (product)</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>Shop Now →</Text>
        </TouchableOpacity>
      </View>

      {/* Deal of the Day */}
      <View style={styles.dealContainer}>
        <Text style={styles.dealTitle}>Deal of the Day</Text>
        <View style={styles.timerRow}>
          <FontAwesome name="clock-o" size={14} color="white" />
          <Text style={styles.dealTimer}> 22h 55m 20s remaining</Text>
        </View>
        <TouchableOpacity style={styles.dealButton}>
          <Text style={styles.dealButtonText}>View all →</Text>
        </TouchableOpacity>
      </View>

      {/* 🔥 Featured Products List */}
      <Text style={styles.sectionTitle}>Featured Products</Text>
      <ProductListScreen /> {/* 🛒 Product List Component Added Here */}
      {/* 🔥 Special Offers Banner */}
      <View style={styles.specialOfferContainer}>
        <Image source={require("../../assets/images/offers.png")} style={styles.specialOfferImage} />
        <View>
          <Text style={styles.specialOfferTitle}>Special Offers 🎉</Text>
          <Text style={styles.specialOfferText}>We make sure you get the offer you need at best prices</Text>
        </View>
      </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
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
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAEAEA",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
    marginVertical: 10,
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
  },
  sectionTitle: {
    marginTop:5,
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
  banner: {
    backgroundColor: "#FF7A90",
    borderRadius: 12,
    padding: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  bannerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  bannerSubtitle: {
    color: "white",
  },
  bannerButton: {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  bannerButtonText: {
    color: "#FF7A90",
    fontWeight: "bold",
  },
  dealContainer: {
    backgroundColor: "#2196F3",
    borderRadius: 12,
    padding: 12,
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
    marginTop: 0,
  },
  dealButtonText: {
    color: "#2196F3",
    fontWeight: "bold",
  },
  specialOfferContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginTop: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    width: "100%", 
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
