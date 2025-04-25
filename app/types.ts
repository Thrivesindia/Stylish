import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  title: string;
  image: ImageSourcePropType;
  price: string;
  rating: number;
  ratingCount: string;
  description: string;
}
export interface CartItem {
  id: string;
  name: string;
  variant: string;
  rating: number;
  price: number;
  originalPrice: number;
  image: string;
}
  
  export type RootStackParamList = {
    HomeScreen: undefined;
    ProductList: { category: string };
    ProductDetail: { product: Product };
    CartScreen: { cartItems: CartItem[] };
  };
  