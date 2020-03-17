import React from 'react';
import '../ShopPage/shop.component.styles.scss';
import {SHOP_DATA} from './ShopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';


class Shop extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections:SHOP_DATA
        }
    }

    render(){
        const  {collections} = this.state;
        return(
            <div>
                {collections.map(({id,...otherCollectionProps})=>{
                return <CollectionPreview key={id} {...otherCollectionProps} />
               })}
            </div>
        )
    }
}


export default Shop;