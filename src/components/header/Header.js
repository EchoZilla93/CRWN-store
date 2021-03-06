import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {ReactComponent as Logo}  from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart/CartDropdown';
import {selectCartHidden} from '../../redux/cart.selectors';
import {selectCurrentUser} from '../../redux/user.selector';
import { setCurrentUser } from '../../redux/actions';

const Header = ({currentUser,hidden}) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo"/>
        </Link>
        <div className="options">
            <Link className="option" to='/shop'>
                SHOP
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className="option"
                onClick={() => auth.signOut()}
                >SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {
         hidden? null:   
        <CartDropdown/>
        }
    </div>
);

const mapStateToProps = state =>({
    currentUser:selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);