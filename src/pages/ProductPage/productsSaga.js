import { delay, put, takeLatest } from "redux-saga/effects";
import {
  productsError,
  productsLoading,
  productsSuccess,
} from "./productsSlice";
import { products } from '../../productsData';

function* watchFetchProductsHandler() {
  try {
    yield delay(1000);
    yield put(productsSuccess(products));
  } catch (error) {
    yield put(productsError());
  }
}

export function* watchFetchProducts() {
  yield takeLatest(productsLoading.type, watchFetchProductsHandler);
}
