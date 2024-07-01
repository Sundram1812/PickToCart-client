import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType";

const initialState={
    cart:null,
    isLoading:false,
    error: null,
    cartItems: [],
    responseMsg: null
}

export function cartReducer(state=initialState, action){
    switch(action.type){

        case ADD_ITEM_TO_CART_REQUEST:
            return{...state, isLoading: true, responseMsg: null, error: null} 
        case ADD_ITEM_TO_CART_SUCCESS:
            return{...state, isLoading: false, responseMsg: "added to cart", cartItems: [...state.cartItems, action.payload]}
        case ADD_ITEM_TO_CART_FAILURE:
            return{...state, isLoading: false, responseMsg: null, error: action.payload}



        case REMOVE_CART_ITEM_REQUEST:
            return{...state, isLoading: true, error: null} 
        case REMOVE_CART_ITEM_SUCCESS:
            return{...state, isLoading: false,  responseMsg: action.payload.responseMsg, cartItems: state.cartItems.filter((cartItem)=> cartItem.cartItemId !== action.payload.cartItemId)}
        case REMOVE_CART_ITEM_FAILURE:
            return{...state, isLoading: false, responseMsg: null, error: action.payload}





        case GET_CART_REQUEST:
            return{...state, isLoading: true, responseMsg: null, error: null}
        case GET_CART_SUCCESS:
            return{...state, isLoading: false, error: null, cart: action.payload, cartItems: action.payload.cartItems}
        case GET_CART_FAILURE:
            return{...state, isLoading: false, responseMsg: null, error: action.payload}




        case UPDATE_CART_ITEM_REQUEST:
            return{...state, isLoading: true, responseMsg: null, error: null}
        case UPDATE_CART_ITEM_SUCCESS:
            return{
                ...state, 
                cartItems: state.cartItems.map((cartItem)=> cartItem.cartItemId === action.payload.cartItemId ? action.payload : cartItem),
                isLoading:false,
                error:null
            }
        case UPDATE_CART_ITEM_FAILURE:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }


        default:
            return state;
    }
}