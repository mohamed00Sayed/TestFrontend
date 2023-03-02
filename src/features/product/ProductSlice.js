import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import API  from "./productAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (url) => {
    return await API.fetchProducts(url);
  }
);

export const productsAdapter = createEntityAdapter({
  selectId: (product) => product.sku,
});

const initialState = productsAdapter.getInitialState();
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, productsAdapter.upsertMany);
  },
});

export default productSlice.reducer;
