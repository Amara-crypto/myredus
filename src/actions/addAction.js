import { ADD_PRODUCT_BASKET, REMOVE_PRODUCT } from "./types";

export const addBasket = (productName) => {
	return (dispatch) => {
		console.log("add to Basket");
		console.log("product added: ", productName);
		dispatch({
			type: ADD_PRODUCT_BASKET,
			payload: productName,
		});
	};
};

export const removeProduct = (productName) => {
	return {
		type: REMOVE_PRODUCT,
		payload: productName,
	};
};
