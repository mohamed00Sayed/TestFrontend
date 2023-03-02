import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import API from "./productAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (url) => {
    return await API.fetchProducts(url);
  }
);
/*normalize the data using entity adapter*/
export const productsAdapter = createEntityAdapter({
  selectId: (product) => product.sku,
  sortComparer: (a, b) => a.sku.localeCompare(b.sku),
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
