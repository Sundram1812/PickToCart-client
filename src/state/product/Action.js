import { type } from "@testing-library/user-event/dist/type";
import {
    FIND_PRODUCT_BY_ID_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";
import { api } from "../../config/apiConfig";


// Find product
export const findProduct = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });

  const {
    category,
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;

  try {
    const { data } =
      await api.get(`/api/product/all?category=${category}&colors=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
        &minDiscount=${minDiscount}&sort=${sort}&stock=${stock}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

        console.log(data );
    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
     
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
  }
};



// find product by id
export const findProductById = (productId) => async (dispatch) =>{
    dispatch({type: FIND_PRODUCT_BY_ID_REQUEST})

    try {
        console.log("findProductById is calling...");
        const {data}= await api.get(`/api/product?productId=${productId}`);
        dispatch({type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data})

    } catch (error) {
        dispatch({type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message})
    }
}