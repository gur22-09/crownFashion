import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist'; //higher order  function which takes the persistConfig along withe the root reducer
import storage from 'redux-persist/lib/storage';//using the localStorage, alternatively you can import sessionStorage too.

import userReducer from './user/user-reducer';
import CartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig ={
    key:'root',
    storage,
    whitelist:['cart']//array containing the reducers we want to store.
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
});

export default persistReducer(persistConfig,rootReducer);
