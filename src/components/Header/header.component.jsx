import React from 'react';
import './header.component.styles.scss';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdow.component';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';
import {selectCurrentUser} from '../../Redux/user/user.selector';

const Header=({currentUser,hidden})=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
         <Link to='/shop' className='option'>
             SHOP
         </Link>
         <Link to='/contacts' className='option'>
             CONTACT
         </Link>
         {
             currentUser?
             <div className='option'  onClick={()=>auth.signOut()}>SIGN OUT</div>
             :
             <Link to='/signin'>SIGN IN</Link>
         }
         <CartIcon />
         </div>
         {
          hidden ?null:<CartDropDown/>
         }
    </div>
)


//state is our root-reducer object the master
//using strucutred selector
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden //state=root-reducer,user=user-reducer
});









export default connect(mapStateToProps)(Header);
