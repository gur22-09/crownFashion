import React from 'react';


import MenuItem from '../menu-item/menu-item.component';



import {connect} from 'react-redux';
import {selectDirectorySections} from '../../Redux/directory/directory.selectors';

import {DirectoryMenuContainer} from './menu-directory.styles';


const Directory = ({sections}) =>(
    
  
  <DirectoryMenuContainer>
    {sections.map(({id,...otherItems})=>{
     return  <MenuItem  key={id} {...otherItems} />
    })}
  </DirectoryMenuContainer>
        

)



const mapStateToProps = state =>({
  sections:selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);