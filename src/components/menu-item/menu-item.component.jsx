import React from 'react';
import {withRouter} from 'react-router-dom';





import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';
  


const MenuItem= ({title,imageUrl,size,history,match,linkUrl})=>{
    return (
        <MenuItemContainer size={size}
         onClick={()=>{history.push(`${match.url}${linkUrl}`)}}>

         <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>  
          
         <ContentContainer className='content'>
             <ContentTitle>{title.toUpperCase()}</ContentTitle>
             <ContentSubtitle>Buy now</ContentSubtitle>
         </ContentContainer>
        </MenuItemContainer>
    )
}


export default withRouter(MenuItem);
