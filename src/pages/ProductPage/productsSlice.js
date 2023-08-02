import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../productsData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    state: "loading",
  },
  reducers: {
    productsLoading: () => ({
      state: "loading",
    }),
    productsSuccess: (_, { payload: products }) => ({
      state: "success",
      products,
    }),
    productsError: () => ({
      state: "error",
    }),
  },
});

export const { productsLoading, productsSuccess, productsError } = productsSlice.actions;

export const selectProductsState = (state) => state.products;

export const selectProducts = (state) => selectProductsState(state).products;

export const getProductById = (state, productId) =>
  selectProducts(state).find(({ id }) => id === productId);


export default productsSlice.reducer;
