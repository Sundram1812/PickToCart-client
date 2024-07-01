import { GET_USER_FAILURET, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURET, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURET, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType"

const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null
}

export function authReducer(state=initialState, action){

    switch(action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state, isLoading: true, error: null}

        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {...state, isLoading: false, error: null, jwt: action.payload}

        case GET_USER_SUCCESS:
            return {...state, isLoading: false, error: null, user: action.payload}

        case REGISTER_FAILURET:
        case LOGIN_FAILURET:
            return {...state, isLoading: false, error: action.payload}

        case GET_USER_FAILURET:
            return {...state, isLoading: false, error: action.payload}

        case LOGOUT:
            return initialState

        default:
            return state;
    }

}