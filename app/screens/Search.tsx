import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; // ✅ Changed


const categories = [
  { id: "1", name: "Shoes", icon: "shoe-sneaker" },
  { id: "2", name: "Clothing", icon: "tshirt-crew" },
  { id: "3", name: "Accessories", icon: "watch" },
  { id: "4", name: "Electronics", icon: "cellphone" },
];

const recentSearches = ["Jacket", "Kurti Punjabi Printed", "Sport Shoes","Women's Printed Kurta"];

const sampleProducts = [
  {
    id: "1",
    title: "Kurti Punjabi Printed",
    price: "₹1,499",
    image: "https://thrivesindia.com/Stylish/kurti.jpg",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Jacket",
    price: "₹2,999",
    image: "https://thrivesindia.com/Stylish/jacket.png",
    rating: 4.2,
  },
  {
    id: "3",
    title: "Sport Shoes",
    price: "₹3,499",
    image: "https://thrivesindia.com/Stylish/shousenew.JPG",
    rating: 4.7,
  },
  {
    id: "4",
    title: "Women's Printed Kurta",
    price: "₹999",
    image: "https://thrivesindia.com/Stylish/kurta.png",
    rating: 4.0,
  },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState(sampleProducts);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    // Filter products based on search query (mock implementation)
    const filteredProducts = sampleProducts.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    
    const filteredProducts = sampleProducts.filter((product) =>
      category ? product.title.toLowerCase().includes(category.toLowerCase()) : true
    );
    setProducts(filteredProducts);
  };

  const renderProduct = ({ item }: { item: { id: string; title: string; price: string; image: string; rating: number } }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{item.rating} ★</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCategory = ({ item }: { item: { id: string; name: string; icon: string } }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item.name && styles.selectedCategoryButton,
      ]}
      onPress={() => handleCategorySelect(item.name)}
    >
      <MaterialCommunityIcons
        name={item.icon}
        size={24}
        color={selectedCategory === item.name ? "#fff" : "#666"}
        style={styles.categoryIcon}
      />
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item.name && styles.selectedCategoryText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );
  

  const renderRecentSearch = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.recentSearchItem}
      onPress={() => handleSearch(item)}
    >
      <Ionicons name="search" size={16} color="#666" style={styles.recentSearchIcon} />
      <Text style={styles.recentSearchText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="#666" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for products..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => handleSearch("")}>
            <Ionicons name="close" size={24} color="#666" style={styles.clearIcon} />
          </TouchableOpacity>
        )}
      </View>

      {/* Categories Filter */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* Recent Searches */}
      {searchQuery.length === 0 && (
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          <FlatList
            data={recentSearches}
            renderItem={renderRecentSearch}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.recentSearchesList}
          />
        </View>
      )}

      {/* Search Results */}
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No products found</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  clearIcon: {
    marginLeft: 8,
  },
  categoriesContainer: {
    marginVertical: 16,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  selectedCategoryButton: {
    backgroundColor: "#007bff",
    borderColor: "#007bff",
  },
  categoryIcon: {
    marginRight: 6,
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  selectedCategoryText: {
    color: "#fff",
    fontWeight: "bold",
  },
  recentSearchesContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 16,
    marginBottom: 8,
  },
  recentSearchesList: {
    paddingHorizontal: 16,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  recentSearchIcon: {
    marginRight: 6,
  },
  recentSearchText: {
    fontSize: 14,
    color: "#666",
  },
  productList: {
    paddingHorizontal: 8,
  },
  productRow: {
    justifyContent: "space-between",
  },
  productCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    color: "#f1c40f",
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
  },
});

export default SearchScreen;