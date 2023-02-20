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
  product: ProductI | null;
  loading: boolean;
}
const initialState: initialStateI = {
  product: null,
  loading: false,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // <> generic
    setProduct: (state, action: PayloadAction<ProductI>) => {
      state.product = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;
export default productSlice.reducer;
