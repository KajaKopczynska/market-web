import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../productsData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: products,
    status: "loading",
  },
  reducers: {
    productsLoading: (state) => {
      state.status = "loading";
    },
    productsSuccess: (state, { payload: products }) => {
      state.status = "success";
      state.products = products;
    },
    productsError: (state) => {
      state.status = "error";
    },
  },
});

export const { productsLoading, productsSuccess, productsError } = productsSlice.actions;

export const selectProductsState = (state) => state.products;

export const selectProducts = (state) => selectProductsState(state).products;
export const selectStatus = (state) => selectProductsState(state).status;

export const getProductById = (state, productId) =>
  selectProducts(state).find(({ id }) => id === productId);

export default productsSlice.reducer;
