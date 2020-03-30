import React from 'react';
import './cutom-button.styles.scss';


const CustomButton=({children,inverted,isGoogleSignIn,...otherProps})=>(
    <button className={`${inverted?'inverted':''} 
    ${isGoogleSignIn?'google-sign-in':''} custom-button`} 
    {...otherProps}  >
     {children}
    </button>

)
export default CustomButton;