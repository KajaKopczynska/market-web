import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import saga from "./saga";
import productsReducers from "./pages/ProductPage/productsSlice";

const SagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        products: productsReducers,
    },
    middleware: [SagaMiddleware],
});

SagaMiddleware.run(saga);

export default store;