// // import { ImageSourcePropType } from 'react-native';

// // export interface Product {
// //   id: string;
// //   title: string;
// //   image: ImageSourcePropType;
// //   price: string;
// //   rating: number;
// //   ratingCount: string;
// //   description: string;
// //   subtitle?: string;
// //   originalPrice?: string;
// // }

// // export interface CartItem {
// //   id: string;
// //   image: string;
// //   name: string;
// //   originalPrice: number;
// //   price: number;
// //   rating: number;
// //   variant: string;
// // }

// // export type RootStackParamList = {
// //   Signup: undefined;
// //   Signin: undefined;
// //   Forgotpassword: undefined;
// //   Home: undefined;
// //   Dashboard: undefined;
// //   Wishlist: undefined;
// //   CartScreen: undefined;
// //   Search: undefined;
// //   Settings: undefined;
// //   HomeScreen: undefined;
// //   ProductList: { category: string };
// //   ProductDetail: { product: Product };
// // };

// import { ImageSourcePropType } from "react-native";

// export interface Product {
//   id: string;
//   title: string;
//   price: string;
//   discount: string;
//   rating: number;
//   ratingCount: string;
//   image: ImageSourcePropType;
//   description?: string;
// }

// export interface CartItem {
//   id: string;
//   name: string;
//   variant: string;
//   rating: number;
//   price: number;
//   originalPrice: number;
//   image:  ImageSourcePropType;
// }

// export interface ExtendedCartItem extends CartItem {
//   quantity: number;
// }

// export type RootStackParamList = {
//   Home: undefined;
//   ProductList: { category: string };
//   ProductDetail: { product: Product };
//   CartScreen: { cartItems: ExtendedCartItem[] };
// };
import { ImageSourcePropType } from "react-native";

export interface Product {
  id: string;
  title: string;
  price: string;
  discount: string;
  rating: number;
  ratingCount: string;
  image: ImageSourcePropType;
  description?: string;
}

export interface CartItem {
  id: string;
  name: string;
  variant: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: ImageSourcePropType;
}

export interface ExtendedCartItem extends CartItem {
  quantity: number;
}

export type RootStackParamList = {
  Signup: undefined;
  Signin: undefined;
  Forgotpassword: undefined;
  Home: undefined;
  Dashboard: undefined;
  Wishlist: undefined;
  CartScreen: { cartItems: ExtendedCartItem[] };
  Search: undefined;
  Settings: undefined;
  HomeScreen: undefined;
  ProductList: { category: string };
  ProductDetail: { product: Product };
  PaymentScreen: { orderTotal: number; shippingFee: number; totalWithShipping: number };
};