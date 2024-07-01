import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType";

const initialState = {

    order:null,
    orderItems: [],
    isLoading: null,
    error: null

}

export function orderReducer(state=initialState, action){
    switch(action.type){
        case CREATE_ORDER_REQUEST:
            return {...state, isLoading: true, error: null, }
        case CREATE_ORDER_SUCCESS:
            return {...state, isLoading: false, error: null, order: action.payload, orderItems: action.payload.orderItems}
        case CREATE_ORDER_FAILURE:
            return {...state, isLoading: false, error: action.payload}


        case GET_ORDER_BY_ID_REQUEST:
            return {...state, isLoading: true, error: null, }
        case GET_ORDER_BY_ID_SUCCESS:
            return {...state, isLoading: false, error: null, order: action.payload}
        case GET_ORDER_BY_ID_FAILURE:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}