import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";


const initialState={
    paymentInProgress: false,
    paymentInfoUpdating: false,
    paymentInfo:{},
    updatedPaymentInfo: {},
    error:null
}

export function paymentReducer(state=initialState, action){

    switch(action.type){
        case CREATE_PAYMENT_REQUEST:
            return {...state, paymentInProgress: true}
        case CREATE_PAYMENT_SUCCESS:
            return {...state, paymentInProgress: false, paymentInfo: action.payload, error: null}
        case CREATE_PAYMENT_FAILURE:
            return {...state, paymentInProgress: false, error: action.payload}
        
        case UPDATE_PAYMENT_REQUEST:
            return {...state, paymentInfoUpdating: true}
        case UPDATE_PAYMENT_SUCCESS:
            return {...state, paymentInfoUpdating: false, updatedPaymentInfo: action.payload}
        case UPDATE_PAYMENT_FAILURE:
            return {...state, paymentInProgress: false, error: action.payload}

        default:
            return {...state}
    }

}