import createSagaMiddleware from "redux-saga";
import { configureStore } from '@reduxjs/toolkit'
import reducer from "./rootReducer";
import rootSaga from "./rootSaga";


// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
// Mount it on the Store
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware),
})

// Then run the saga
sagaMiddleware.run(rootSaga)

export default store;