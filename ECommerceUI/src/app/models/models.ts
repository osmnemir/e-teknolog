export interface SuggestedProduct {
  banerimage: string;
  category: Category;
}

export interface NavigationItem {
  category: string;
  subcategories: string[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  mobile: string;
  password: string;
  createdAt: string;
  modifiedAt: string;
}

// #region Product

export interface Offer {
  id: number;
  title: string;
  discount: number;
}

export interface Category {
  id: number;
  category: string;
  subCategory: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  productCategory: Category;
  offer: Offer;
  price: number;
  quantity: number;
  imageName: string;
}

export interface Review {
  id: number;
  user: User;
  product: Product;
  value: string;
  createdAt: string;
}

// #endregion

// #region Cart

export interface CartItem {
  id: number;
  product: Product;
}

export interface Cart {
  id: number;
  user: User;
  cartItems: CartItem[];
  ordered: boolean;
  orderedOn: string;
}

// #endregion

// #region Payment and Orders

export interface PaymentMethod {
  id: number;
  type: string;
  provider: string;
  available: boolean;
  reason: string;
}

export interface Payment {
  id: number;
  user: User;
  paymentMethod: PaymentMethod;
  totalAmount: number;
  shipingCharges: number;
  amountReduced: number;
  amountPaid: number;
  createdAt: string;
}

export interface Order {
  id: number;
  user: User;
  cart: Cart;
  payment: Payment;
  createdAt: string;
}

// #endregion