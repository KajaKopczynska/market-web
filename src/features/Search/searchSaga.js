import { put, takeLatest } from "redux-saga/effects";
import { fetchSearchError, fetchSearchLoading, fetchSearchSuccess } from "./searchSlice";
import { products } from "../../productsData";

function* fetchSearchHandler({ payload: { query } }) {
    try {
        const matchingProducts = products.filter(
            (product) =>
                product.title.toLowerCase().includes(query.toLowerCase()) ||
                product.author.toLowerCase().includes(query.toLowerCase())
        );

        yield put(fetchSearchSuccess(matchingProducts));
    } catch {
        yield put(fetchSearchError());
    }
};

export function* watchFetchSearch() {
    yield takeLatest(fetchSearchLoading.type, fetchSearchHandler);
};