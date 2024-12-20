import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS } from "./ActionType"
import { api } from "../../config/apiConfig";
import { Search } from "@mui/icons-material";


export const createOrder =(reqData) => async (dispatch) =>{
    dispatch({type: CREATE_ORDER_REQUEST});

    try {
        console.log(reqData?.address);
        const {data} = await api.post(`/api/order`, reqData?.address); 
        console.log(data);     
        if(data?.id){
            reqData.navigate({search: `?steps=3&order_id=${data.id}`})
        }
        dispatch({type: CREATE_ORDER_SUCCESS, payload: data})  

    } catch (error) {
        dispatch({type: CREATE_ORDER_FAILURE, payload: error.message})
    }
}

export const getOrderById = (orderId) => async (dispatch) => {
    dispatch({type: GET_ORDER_BY_ID_REQUEST})

    try {
        const {data}=await api.get(`/api/order/orderById?orderId=${orderId}`);
        dispatch({type:GET_ORDER_BY_ID_SUCCESS, payload: data})
        console.log("data : ",data);
    } catch (error) {
        dispatch({type: GET_ORDER_BY_ID_FAILURE, payload: error.message})
    }
}