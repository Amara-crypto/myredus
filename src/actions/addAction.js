import {ADD_PRODUCT_BASKET} from './types';

export const addBasket = (productName ) => {
    return (dispatch) => {
        console.log("add to Basket");
        console.log("product added: ", productName)
        dispatch({
            type:ADD_PRODUCT_BASKET,
            payload: productName
        });
    }
}