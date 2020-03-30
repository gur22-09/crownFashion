import CartActionTypes from './cart.types';

const INITIAL_STATE ={
    hidden:true
};


const CartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return{
            ...state,
            hidden:!state.hidden
        }

        //note not adding payload as its not necessary and optional
        default:
        return state;    
    }
}


export default CartReducer;