import { CartItems, Product } from '@/interfaces';
import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartState {
  cartItems: CartItems[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (item) {
        item.qty++;
      } else {
        state.cartItems.push({ product: action.payload, qty: 1 });
      }
    },
    decrement: (state, action: PayloadAction<Product>) => {
      const item = state.cartItems.find(
        (el) => el.product._id === action.payload._id
      );
      if (item) {
        item.qty--;
        if (item.qty === 0) {
          state.cartItems = state.cartItems.filter(
            (el) => el.product._id !== action.payload._id
          );
        }
      }
    },
  },
});

const cartItem = (state: RootState) => state.cart.cartItems;

export const totalProductQtySelector = createSelector([cartItem], (cartItem) =>
  cartItem.reduce((total: number, curr: CartItems) => (total += curr.qty), 0)
);

export const totalPriceSelector = createSelector([cartItem], (cartItem) =>
  cartItem.reduce(
    (total: number, curr: CartItems) =>
      (total += curr.qty * curr.product.productPrice),
    0
  )
);

export const productQtySelector = createSelector(
  [cartItem, (cartItem, productId) => productId],
  (cartItem, productId) =>
    cartItem.find((el) => el.product._id === productId)?.qty
);

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
