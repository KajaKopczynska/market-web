import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import productsReducers from "./pages/ProductPage/productsSlice";
import searchReducer from "./features/Search/searchSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducers,
        search: searchReducer,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(saga);

export default store;