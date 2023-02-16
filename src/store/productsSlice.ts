import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProductI {
  id: string;
  image: string;
  title: string;
  price: number;
  desc: string;
}
interface initialStateI {
  products: ProductI[] | null;
  loading: boolean;
  total: number;
}
const initialState: initialStateI = {
  products: null,
  loading: false,
  total: 0,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // <> generic
    setProducts: (state, action: PayloadAction<ProductI[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
