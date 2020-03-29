import React from 'react';
import './header.component.styles.scss';

import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux';


const Header=({currentUser})=>(
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
         </div>
    </div>
)


//state is our root-reducer object the master

const mapStateToProps = state =>({
  currentUser:state.user.currentUser //state=root-reducer,user=user-reducer
})









export default connect(mapStateToProps)(Header);
