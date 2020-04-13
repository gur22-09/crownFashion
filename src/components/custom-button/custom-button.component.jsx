import React from 'react';
import './cutom-button.styles.scss';

import {CustomButtonContainer} from './custom-button.styles';


const CustomButton=({children,...props})=>(
    <CustomButtonContainer {...props}  >
     {children}
    </CustomButtonContainer>

)
export default CustomButton;