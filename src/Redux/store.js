import {createStore,applyMiddleware} from 'redux';

import logger from 'redux-logger';

import combineReducers from './root-reducer';

const middleware = [logger];


const store = createStore(combineReducers,applyMiddleware(...middleware)); //spreading beacuse we want to scale. applymidlleware can take any no. of middlewares.


export default store;


