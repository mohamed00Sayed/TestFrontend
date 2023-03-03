import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import API from "../api/productAPI";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (url) => {
    return await API.fetchProducts(url);
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (req, storeAPI) => {
    const dvds = [];
    const books = [];
    const furnitures = [];
    const ids = [];
    const products = req.products;

    products.forEach((product) => {
      if (product.weight !== undefined) {
        books.push(product.sku);
        ids.push(product.sku);
      }
      if (product.size !== undefined) {
        dvds.push(product.sku);
        ids.push(product.sku);
      }
      if (product.dimensions !== undefined) {
        furnitures.push(product.sku);
        ids.push(product.sku);
      }
    });

    /*optimistic update of the ui*/
    const dispatch = storeAPI.dispatch;
    dispatch(productsDeleted(ids));

    const data = {
      books,
      dvds,
      furnitures,
    };

    const response = await API.deleteProducts(req.url, data);
    if (response === 403) {
      /*failded optimistic update, return the items to the store again*/
      dispatch(productsAdded(products));
    } else return response;
    /*return the response which is the ids of the products to be deleted*/
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
  reducers: {
    productsDeleted(state, action) {
      productsAdapter.removeMany(state, action.payload);
    },

    productsAdded(state, action) {
      productsAdapter.upsertMany(state, action.payload);
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, productsAdapter.upsertMany);
    /* no need to remove what has already been removed in the thunk optimistically
     * builder.addCase(deleteProducts.fulfilled, productsAdapter.removeMany);
     */
  },
});

export const { productsAdded, productsDeleted } = productSlice.actions;
export default productSlice.reducer;
