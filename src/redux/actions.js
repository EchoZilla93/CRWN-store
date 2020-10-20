export const setCurrentUser = user => ({
    type:'SET_CURENT_USER',
    payload:user
});

export const toggleCart = () => ({
    type: 'TOOGLE_CART_HIDDEN'
});

export const addItem = item => ({
    type: 'ADD_ITEM',
    payload: item
});

export const clearItemFromCart = item =>({
    type:'CLEAR_ITEM',
    payload:item
});

export const removeItem = item => ({
    type:'REMOVE_ITEM',
    payload:item
});