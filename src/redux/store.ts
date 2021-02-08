import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {rootReducer } from "./reducers";
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {createMigrate} from 'redux-persist';

// const migrations = {
//     1: (previousVersionState: { number: any; }) => ({
//       number: {
//         change: previousVersionState.number,
//         lastUpdate: new Date()
//       }
//     })
//   };
  

// const migration = false;

// const numberPersistConfig = {
//     key: "persistedStore",
//     version: 0,
//     migrate: createMigrate(migrations,{debug : migration})
// }

const persistConfig = {
    key : 'root',
    storage : storage,
    blacklist :['navigation'],

    // whitelist: ['profileEmployerReducers']
}


const persistedReducer = persistReducer(persistConfig,rootReducer );

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk,logger))
)

const persistor = persistStore(store);

export {store,persistor}
