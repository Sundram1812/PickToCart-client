import axios from "axios"
import { API_BASE_URL } from "../../config/apiConfig"
import { GET_USER_FAILURET, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURET, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURET, REGISTER_REQUEST, REGISTER_SUCCESS } from "./actionType";

// FOR SIGNUP USER
const registerRequest= () =>({type: REGISTER_REQUEST});
const registerSuccess= (user) =>({type: REGISTER_SUCCESS, payload: user});
const registerFailure= (error) =>({type: REGISTER_FAILURET, payload: error});


export const register=(userData)=> async(dispatch)=>{

    dispatch(registerRequest)

    try{
        const response=await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user=response.data;

        if(user.jwt){
            localStorage.setItem("jwt", user.jwt)
        }
        console.log("user ", user);
        console.log("jwt ;;;;;",user.jwt);

        dispatch(registerSuccess(user.jwt))

    }catch(error){
        dispatch(registerFailure(error.message))
    }

} 


// FOR SIGNIN USER
const loginRequest= () =>({type: LOGIN_REQUEST});
const loginSuccess= (user) =>({type: LOGIN_SUCCESS, payload: user});
const loginFailure= (error) =>({type: LOGIN_FAILURET, payload: error});



export const login =(userData) => async(dispatch) =>{

    dispatch(loginRequest)

    try {
        const response= await axios.post(`${API_BASE_URL}/auth/signin`, userData);
        console.log(response.error);
        const user=response?.data;

        if(user.jwt){
            localStorage.setItem("jwt", user.jwt);
        }

        console.log("user ", user);
        dispatch(loginSuccess(user.jwt));
        
    } catch (error) {
        console.log(error.message);
        dispatch(loginFailure(error.message))
    }
}


// GETTING USER
const getUserRequest= () =>({type: GET_USER_REQUEST});
const getUserSuccess= (user) =>({type: GET_USER_SUCCESS, payload: user});
const getUserFailure= (error) =>({type: GET_USER_FAILURET, payload: error});

const token = localStorage.getItem("jwt");

export const getUser=(jwt)=>async(dispatch)=>{

    dispatch(getUserRequest())

    try {
        const response=await axios.get(`${API_BASE_URL}/api/user/profile`,{
            headers:{
                "Authorization": `Bearer ${jwt}`
            }
        });

        const user=response.data;
        console.log("user ", user);
        dispatch(getUserSuccess(user))

    } catch (error) {
        dispatch(getUserFailure(error.message))
    }
}


// FOR  LOGOUT 
export const logout = () => (dispatch) =>{
    dispatch({type: LOGOUT, payload: null});
}
    