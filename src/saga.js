import { all } from "redux-saga/effects";
import { watchFetchProducts } from "./pages/ProductPage/productsSaga";

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
};
