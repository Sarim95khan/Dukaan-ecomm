import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  items: Array<any>;
  totalQuantity: number;
  totalAmount: number;
}
const initialState: CounterState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity += actions.payload.quantity;
    },
    removeToCart: (state, actions: PayloadAction<any>) => {
      state.totalQuantity -= actions.payload.quantity;
    },
    clearCart: (state) => {
      state = initialState;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
