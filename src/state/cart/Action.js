import { api } from "../../config/apiConfig";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"



// Get cart of user
export const getCart =() => async (dispatch) =>{
    dispatch({type:GET_CART_REQUEST});

    try {
        const {data} =await api.get('/api/cart');
        console.log(data);
        dispatch({type: GET_CART_SUCCESS, payload: data})
    
        
    } catch (error) {
        console.log(error);
        dispatch({type: GET_CART_FAILURE, payload: error.message})
    }
}


// Add cartItem to cart
export const addItemToCart = (reqData, userId) => async (dispatch)=>{
    dispatch({type: ADD_ITEM_TO_CART_REQUEST});

    try {

        const {data} =await api.put(`/api/cart/addToCart?userId=${userId}`, reqData);
        // console.log("-----------");
        // console.log(data);
        // console.log("-----------");
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error.message})
    }
}


// Removing cart item from cart 
export const removeCartItem =(userId, cartItemId)=> async (dispatch) =>{
    dispatch({type: REMOVE_CART_ITEM_REQUEST})

    try {
        const {data} =await api.delete(`api/cartItem/delete?userId=${userId}&cartItemId=${cartItemId}`);

        const actionData={
            "responseMsg":data,
            "cartItemId":cartItemId
        }

        dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: actionData})
        
    } catch (error) {
        dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: error.message})
    }
}


// update cart item

export const updateCartItem =(userId,cartItemId,reqData) => async (dispatch) =>{
    dispatch({type: UPDATE_CART_ITEM_REQUEST});

    try {
        const {data}= await api.put(`/api/cartItem/update?userId=${userId}&cartItemId=${cartItemId}`, reqData);
        dispatch({type: UPDATE_CART_ITEM_SUCCESS, payload: data})

        console.log(data);

    } catch (error) {
        dispatch({type: UPDATE_CART_ITEM_FAILURE, payload: error.message})
    }
} 