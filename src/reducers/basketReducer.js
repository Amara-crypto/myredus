import {ADD_PRODUCT_BASKET,GET_NUMBERS_BASKET} from '../actions/types';
const initialState = {
    basketNumbers:0,
    CartCost:0,
    addedItems:[],
   products: []
    /* 
    },
    Iphone:{
        inCart:false,
        price:400,
        number:0
    },
    Oneplus:{
        inCart:false,
        price:350,
        number:0
    }
    }*/
    
}

export  default (state = initialState, actions) => {
    switch(actions.type){
    case ADD_PRODUCT_BASKET:
        let addQuantity = {...state.products[actions.payload]}
       
        console.log(addQuantity)
        let new_products=[...state.products,actions.payload]
        return{
           products: new_products,
            basketNumbers: state.basketNumbers + 1
        }
    case GET_NUMBERS_BASKET:
        return{
            ...state
        }
        default:
            return state;
    }
}