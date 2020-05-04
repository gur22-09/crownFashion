import {createSelector} from 'reselect';


const selectShop = (state)=>state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections
);


export const selectShopCollection = paramUrlId => createSelector(
    [selectShopCollections],
    collections=>collections ? collections[paramUrlId] : null
)

//converting our collection obj into array for collection overview to use.
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections=>collections ? Object.keys(collections).map(key=>collections[key]) :[]
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop=>shop.isFetching
);

export const isCollectionLoaded = createSelector(
    [selectShop],
    shop=>!!shop.collections
)