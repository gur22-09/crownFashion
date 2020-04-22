import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist'; //adding for persisting store

import logger from 'redux-logger';

import thunk from 'redux-thunk';

import combineReducers from './root-reducer';

const middleware = [thunk];

if(process.env.NODE_ENV === 'development'){
    middleware.push(logger);
}


export  const store = createStore(combineReducers,applyMiddleware(...middleware)); //spreading beacuse we want to scale. applymidlleware can take any no. of middlewares.

export  const persistor = persistStore(store);

export default {store,persistor};


