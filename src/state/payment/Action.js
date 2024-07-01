import { type } from "@testing-library/user-event/dist/type";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";

export const creatPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(
      `/api/payments/${orderId}`,
      {}
    );

    console.log(data);
    dispatch({type: CREATE_PAYMENT_SUCCESS, payload: data})

    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST});
  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${reqData?.paymentId}&order_id=${reqData?.orderId}`
    );

    dispatch({type: UPDATE_PAYMENT_SUCCESS, payload: data})

    console.log("update payment: ", data);
  } catch (error) {
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
  }
};
