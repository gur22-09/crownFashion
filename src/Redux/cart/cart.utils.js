export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingItems = cartItems.find(cartItem => (
        cartItem.id === cartItemToAdd.id
    ));

    if (existingItems) {

        return cartItems.map(cartItem =>

            cartItem.id === cartItemToAdd.id ? {
                ...cartItem,
                quantity: cartItem.quantity + 1
            } :
            cartItem

        )

    }

    return [...cartItems, {
        ...cartItemToAdd,
        quantity: 1
    }];
}

export const removeItemsFromCart = (cartItems,cartItemToRemove)=>{
    const existingItem = cartItems.find(
        cartItem=>(cartItemToRemove.id === cartItem.id
    ));
     
    

    if(existingItem.quantity ===1){
       return cartItems.filter(cartItem=>cartItemToRemove.id !== cartItem.id);
    }
    


    return cartItems.map(
        cartItem=>
        cartItem.id === existingItem.id?
        {...cartItem,quantity:cartItem.quantity-1}
        :
        cartItem
    );
    
}
