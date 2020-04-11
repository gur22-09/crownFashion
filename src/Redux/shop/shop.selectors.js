import {createSelector} from 'reselect';


const selectShop = (state)=>state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections
);


export const selectShopCollection = paramUrlId => createSelector(
    [selectShopCollections],
    collections=>collections[paramUrlId]
)

//converting our collection obj into array for collection overview to use.
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
)