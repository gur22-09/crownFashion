import React from 'react';



import Directory from '../../components/menu-directory/menu-directory.component';

import {HomepageContainer} from './homepage.styles';


const Homepage = ()=>{
    
    
    return(
        <HomepageContainer className='homepage'>
           <Directory />
        </HomepageContainer>
    )
}

export default Homepage;