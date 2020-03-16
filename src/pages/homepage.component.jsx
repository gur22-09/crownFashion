import React from 'react';
import './homepage.component.styles.scss';
import Directory from '../components/menu-directory/menu-directory.component';

const Homepage = ()=>{
    return(
        <div className='homepage'>
           <Directory />
        </div>
    )
}

export default Homepage;