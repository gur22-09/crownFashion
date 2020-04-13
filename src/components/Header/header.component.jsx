import React from 'react';


import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropDown from '../cart-dropdown/cart-dropdow.component';

import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../Redux/cart/cart.selectors';
import {selectCurrentUser} from '../../Redux/user/user.selector';

import {HeaderContainer,LogoContainer,OptionsContainer,OptionLink} from './header.styles';

const Header=({currentUser,hidden})=>(
    <HeaderContainer>

        <LogoContainer to='/' >
            <Logo className='logo' />
        </LogoContainer>


        <OptionsContainer>
         <OptionLink to='/shop'>
             SHOP
         </OptionLink>
         <OptionLink to='/contacts'>
             CONTACT
         </OptionLink>
         {
             currentUser?
             <OptionLink as='div' onClick={()=>auth.signOut()}>SIGN OUT</OptionLink>
             :
             <Link to='/signin'>SIGN IN</Link>
         }
         <CartIcon />
         </OptionsContainer>
         {
          hidden ?null:<CartDropDown/>
         }
    </HeaderContainer>
)


//state is our root-reducer object the master
//using strucutred selector
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden //state=root-reducer,user=user-reducer
});


export default connect(mapStateToProps)(Header);
