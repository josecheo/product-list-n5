export interface Product {
  name: string;
  price: number;
  amount: number;
  id: number;
  image: string;
}

export interface CartItems {
  productId: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItems[];
  addToCart: (item: CartItems) => void;
  removeFromCart: (itemId: number) => void;
  subtractAmount: (item: number) => void;
  cleanCart: () => void;
}
