import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'; //adding for persisting store

import logger from 'redux-logger';

import combineReducers from './root-reducer';

const middleware = [logger];


export  const store = createStore(combineReducers,applyMiddleware(...middleware)); //spreading beacuse we want to scale. applymidlleware can take any no. of middlewares.

export  const persistor = persistStore(store);

export default {store,persistor};


