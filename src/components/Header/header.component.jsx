import React from 'react';
import './header.component.styles.scss';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import CardDropDown from '../card-dropdown/card-dropdow.component';

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
          hidden ?null:<CardDropDown/>
         }
    </div>
)


//state is our root-reducer object the master

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
  currentUser,
  hidden //state=root-reducer,user=user-reducer
})









export default connect(mapStateToProps)(Header);
