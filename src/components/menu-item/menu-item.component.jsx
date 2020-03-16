import React from 'react';
import './menu-item.styles.scss';


const MenuItem= ({title,imageUrl,size})=>{
    return (
        <div
        style={{
            backgroundImage:`url(${imageUrl})`,

        }} 
        className={`menu-item ${size}`}>
                    <div className='content'>
                        <h1 className='title'>{title}</h1>
                        <span className='subtitle'>Buy now</span>
                    </div>
        </div>
    )
}


export default MenuItem;
