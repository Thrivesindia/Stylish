// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { CartItem, RootStackParamList } from '../types';

// type Props = NativeStackScreenProps<RootStackParamList, "CartScreen">;
// interface ExtendedCartItem extends CartItem {
//   quantity: number;
// }

// const CartScreen: React.FC<Props> = ({ route }) => {
//   const [cartItems, setCartItems] = useState<ExtendedCartItem[]>([]);
//   console.log('CartItems in CartScreen:', cartItems);
//   useEffect(() => {
//     if (route.params?.cartItems) {
//       console.log('Received cartItems:', route.params.cartItems); // Debug log
//       setCartItems((prevItems) => {
//         const newItems = (route.params.cartItems as ExtendedCartItem[]) || [];
//         const updatedItemsMap = new Map<string, ExtendedCartItem>();

//         // Add existing items to the map
//         prevItems.forEach((item) => {
//           const key = `${item.id}-${item.variant}`;
//           updatedItemsMap.set(key, { ...item });
//         });

//         // Merge new items
//         newItems.forEach((newItem) => {
//           const key = `${newItem.id}-${newItem.variant}`;
//           if (updatedItemsMap.has(key)) {
//             // Update quantity if item exists
//             const existingItem = updatedItemsMap.get(key)!;
//             updatedItemsMap.set(key, {
//               ...existingItem,
//               quantity: existingItem.quantity + (newItem.quantity || 1),
//             });
//           } else {
//             // Add new item
//             updatedItemsMap.set(key, { ...newItem, quantity: newItem.quantity || 1 });
//           }
//         });

//         const updatedItems = Array.from(updatedItemsMap.values());
//         console.log('Updated cartItems:', updatedItems); 
//         return updatedItems;
//       });
//     }
//   }, [route.params?.cartItems]);

//   // Increase item quantity
//   const increaseQuantity = (itemId: string, variant: string) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId && item.variant === variant
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       )
//     );
//   };

//   // Decrease item quantity
//   const decreaseQuantity = (itemId: string, variant: string) => {
//     setCartItems((prevItems) => {
//       const updatedItems = prevItems
//         .map((item) =>
//           item.id === itemId && item.variant === variant
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0); // Remove items with quantity 0
//       console.log('After quantity decrease:', updatedItems); // Debug log
//       return updatedItems;
//     });
//   };

//   // Calculate total price
//   const totalPrice = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   // Calculate total number of items
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   const renderItem = ({ item }: { item: ExtendedCartItem }) => (
//     <View style={styles.itemContainer}>
//       <Image
//         source={typeof item.image === 'string' ? { uri: item.image } : item.image}
//         style={styles.itemImage}
//         resizeMode="cover"
//       />
//       <View style={styles.itemDetails}>
//         <Text style={styles.itemName}>{item.name}</Text>
//         <Text style={styles.itemVariant}>Variations: {item.variant}</Text>
//         <View style={styles.ratingContainer}>
//           <Text style={styles.rating}>{item.rating} ⭐</Text>
//           <Text style={styles.discount}>
//             {(((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(0)}% off
//           </Text>
//         </View>
//         <Text style={styles.price}>₹{item.price} x {item.quantity}</Text>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity
//             onPress={() => decreaseQuantity(item.id, item.variant)}
//             style={styles.quantityButton}
//           >
//             <Text style={styles.quantityButtonText}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{item.quantity}</Text>
//           <TouchableOpacity
//             onPress={() => increaseQuantity(item.id, item.variant)}
//             style={styles.quantityButton}
//           >
//             <Text style={styles.quantityButtonText}>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <View style={styles.addressContainer}>
//         <Text style={styles.sectionTitle}>Delivery Address</Text>
//         <View style={styles.addressBox}>
//           <Text style={styles.addressText}>
//             216 St Paul's Rd, London N1 2LL, UK
//           </Text>
//           <TouchableOpacity>
//             <Text style={styles.editText}>✏️</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <Text style={styles.sectionTitle}>Shopping List</Text>
//       <FlatList
//         data={cartItems}
//         renderItem={renderItem}
//         keyExtractor={(item) => `${item.id}-${item.variant}`}
//         style={styles.list}
//         ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
//       />

//       <View style={styles.totalContainer}>
//         <View style={styles.totalRow}>
//           <Text style={styles.totalText}>Total Order ({totalItems}):</Text>
//           <Text style={styles.totalPrice}>₹{totalPrice}</Text>
//         </View>
//         <TouchableOpacity style={styles.paymentButton}>
//           <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   addressContainer: {
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   addressBox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//   },
//   addressText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   editText: {
//     fontSize: 16,
//     color: '#007AFF',
//   },
//   list: {
//     flexGrow: 0,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     padding: 12,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   itemImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 8,
//     marginRight: 12,
//   },
//   itemDetails: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 4,
//   },
//   itemVariant: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 4,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     marginBottom: 4,
//   },
//   rating: {
//     fontSize: 14,
//     color: '#FFD700',
//     marginRight: 8,
//   },
//   discount: {
//     fontSize: 14,
//     color: '#FF6347',
//   },
//   price: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 4,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityButton: {
//     width: 30,
//     height: 30,
//     backgroundColor: '#007AFF',
//     borderRadius: 15,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 5,
//   },
//   quantityButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   quantityText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginHorizontal: 10,
//   },
//   totalContainer: {
//     padding: 16,
//     borderTopWidth: 1,
//     borderColor: '#ddd',
//     marginTop: 16,
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 12,
//   },
//   totalText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   totalPrice: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   paymentButton: {
//     backgroundColor: '#FF0000',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   paymentButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 20,
//   },
// });

// export default CartScreen;
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CartItem, RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, "CartScreen">;
interface ExtendedCartItem extends CartItem {
  quantity: number;
}

const CartScreen: React.FC<Props> = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState<ExtendedCartItem[]>([]);
  console.log('CartItems in CartScreen:', cartItems);
  useEffect(() => {
    if (route.params?.cartItems) {
      console.log('Received cartItems:', route.params.cartItems); // Debug log
      setCartItems((prevItems) => {
        const newItems = (route.params.cartItems as ExtendedCartItem[]) || [];
        const updatedItemsMap = new Map<string, ExtendedCartItem>();

        // Add existing items to the map
        prevItems.forEach((item) => {
          const key = `${item.id}-${item.variant}`;
          updatedItemsMap.set(key, { ...item });
        });

        // Merge new items
        newItems.forEach((newItem) => {
          const key = `${newItem.id}-${newItem.variant}`;
          if (updatedItemsMap.has(key)) {
            // Update quantity if item exists
            const existingItem = updatedItemsMap.get(key)!;
            updatedItemsMap.set(key, {
              ...existingItem,
              quantity: existingItem.quantity + (newItem.quantity || 1),
            });
          } else {
            // Add new item
            updatedItemsMap.set(key, { ...newItem, quantity: newItem.quantity || 1 });
          }
        });

        const updatedItems = Array.from(updatedItemsMap.values());
        console.log('Updated cartItems:', updatedItems); 
        return updatedItems;
      });
    }
  }, [route.params?.cartItems]);

  // Increase item quantity
  const increaseQuantity = (itemId: string, variant: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.variant === variant
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease item quantity
  const decreaseQuantity = (itemId: string, variant: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === itemId && item.variant === variant
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // Remove items with quantity 0
      console.log('After quantity decrease:', updatedItems); // Debug log
      return updatedItems;
    });
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Calculate total number of items
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Handle navigation to PaymentSuccess
  const handleProceedToPayment = () => {
    const shippingFee = 30; // As per the image
    const totalWithShipping = totalPrice + shippingFee;
    navigation.navigate('Checkout', { orderTotal: totalPrice, shippingFee, totalWithShipping });
  };

  const renderItem = ({ item }: { item: ExtendedCartItem }) => (
    <View style={styles.itemContainer}>
      <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={styles.itemImage}
        resizeMode="cover"
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemVariant}>Variations: {item.variant}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{item.rating} ⭐</Text>
          <Text style={styles.discount}>
            {(((item.originalPrice - item.price) / item.originalPrice) * 100).toFixed(0)}% off
          </Text>
        </View>
        <Text style={styles.price}>₹{item.price} x {item.quantity}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item.id, item.variant)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            onPress={() => increaseQuantity(item.id, item.variant)}
            style={styles.quantityButton}
          >
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.sectionTitle}>Delivery Address</Text>
        <View style={styles.addressBox}>
          <Text style={styles.addressText}>
            216 St Paul's Rd, London N1 2LL, UK
          </Text>
          <TouchableOpacity>
            <Text style={styles.editText}>✏️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Shopping List</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}-${item.variant}`}
        style={styles.list}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />

      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalText}>Total Order ({totalItems}):</Text>
          <Text style={styles.totalPrice}>₹{totalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.paymentButton} onPress={handleProceedToPayment}>
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addressContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addressBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  addressText: {
    fontSize: 14,
    color: '#333',
  },
  editText: {
    fontSize: 16,
    color: '#007AFF',
  },
  list: {
    flexGrow: 0,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemVariant: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    marginRight: 8,
  },
  discount: {
    fontSize: 14,
    color: '#FF6347',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    backgroundColor: '#007AFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  totalContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    marginTop: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  paymentButton: {
    backgroundColor: '#FF0000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  paymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CartScreen;