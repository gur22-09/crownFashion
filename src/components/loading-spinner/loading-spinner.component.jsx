import React from 'react';

import {SpinnerOverlay,SpinnerContainer} from './loading-spinner.styles';

const LoadingSpinner = Component =>{

    const Spinner = ({isLoading,...otherProps})=>{
     return isLoading ? (
       <SpinnerOverlay>
        <SpinnerContainer />
       </SpinnerOverlay>
     )
     :
     (
        <Component {...otherProps}/>
     );
    };

  return Spinner;
};



export default LoadingSpinner;
