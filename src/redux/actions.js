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