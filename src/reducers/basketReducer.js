import { ADD_PRODUCT_BASKET, REMOVE_PRODUCT } from "../actions/types";
import { act } from "react-dom/test-utils";
const initialState = {
	basketNumbers: 0,
	CartCost: 0,
	addedItems: [],
	products: [],
};

export default (state = initialState, actions) => {
	switch (actions.type) {
		case ADD_PRODUCT_BASKET:
			let cart = state.products;
			let payload = actions.payload;
			let productInCart = check(cart, payload.id);
			if (productInCart.length > 0) {
				let productwithoutPayload = arrayRemove(cart, payload.id);
				let newQuantity = productInCart[0].quantity + payload.quantity;
				productInCart[0].quantity = newQuantity;
				cart = [...productwithoutPayload, productInCart[0]];
			} else {
				productInCart = [...state.products, actions.payload];
			}
			return {
				products: productInCart,
				basketNumbers: sum(cart),
			};
		// let addQuantity = { ...state.products[actions.payload] };

		// console.log(addQuantity);
		// let new_products = [...state.products, actions.payload];
		// return {
		// 	products: new_products,
		// 	basketNumbers: state.basketNumbers + 1,
		// };
		case REMOVE_PRODUCT:
			let newCart = arrayRemove(state.products, actions.payload.id);
			return {
				product: newCart,
			};
		default:
			return state;
	}
};

function arrayRemove(array, item) {
	console.log("Item is" + item);
	return array.filter(function (ele) {
		return ele.id !== item;
	});
}

function check(array, item) {
	return array.filter(function (ele) {
		return ele.id === item;
	});
}
function sum(products) {
	return products.reduce((a, b) => a + (b["quantity"] || 0), 0);
}
