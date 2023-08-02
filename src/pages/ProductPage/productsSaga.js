// import { getProductsFromApi } from "./getProductsFromApi";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  productsError,
  productsLoading,
  productsSuccess,
} from "./productsSlice";
import { products } from '../../productsData';


function* watchFetchProductsHandler() {
  try {
    // const products = yield call(getProductsFromApi);
    yield put(productsSuccess(products));
  } catch (error) {
    yield put(productsError());
  }
}

export function* watchFetchProducts() {
  yield takeLatest(productsLoading.type, watchFetchProductsHandler);
}
