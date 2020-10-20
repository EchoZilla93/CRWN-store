import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';

import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import {selectCartItems} from '../../redux/cart.selectors'
import {toggleCart} from '../../redux/actions';

const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem 
                    key={cartItem.id}
                    item={cartItem}
                    />)
                    : 
                    <span className="empty-message">Your Cart is Empty</span>
            }
        </div>
            <Button 
            onClick={() => { history.push('/checkout');
            dispatch(toggleCart())
        }}
            >CHECKOUT</Button>
        </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));