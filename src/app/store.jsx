import { combineReducers } from "redux";
/* eslint-disable import/no-anonymous-default-export */
import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from "./rootReducer";
import rootSaga from "./rootSaga";


const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

// Mount it on the Store
const store = configureStore({
    reducer: persistedReducer,
    // reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(middleware),
});

// Then run the saga
sagaMiddleware.run(rootSaga)

export let persistor = persistStore(store)
export default store;