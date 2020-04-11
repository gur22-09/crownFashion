import React from 'react';
import MenuItem from '../menu-item/menu-item.component';

import {connect} from 'react-redux';
import {selectDirectorySections} from '../../Redux/directory/directory.selectors';


const Directory = ({sections}) =>(
    
  
  <div className='directory-menu'>
    {sections.map(({id,...otherItems})=>{
     return  <MenuItem  key={id} {...otherItems} />
    })}
  </div>
        

)



const mapStateToProps = state =>({
  sections:selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory);