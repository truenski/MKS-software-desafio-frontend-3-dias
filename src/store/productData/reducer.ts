/* eslint-disable import/no-anonymous-default-export */
import {
    FETCH_PRODUCT_DATA_REQUEST,
    FETCH_PRODUCT_DATA_SUCCESS,
    FETCH_PRODUCT_DATA_FAILURE,
  } from "./actionTypes";
  
  import { ProductDataActions, ProductDataState } from "./types";
  
  const initialState: ProductDataState = {
    pending: false,
    productData: {},
    error: null,
  };

  export default (state = initialState, action: ProductDataActions) => {
    switch (action.type) {
      case FETCH_PRODUCT_DATA_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_PRODUCT_DATA_SUCCESS:
        return {
          ...state,
          pending: false,
          productData: action.payload.productData,
          error: null,
        };
      case FETCH_PRODUCT_DATA_FAILURE:
        return {
          ...state,
          pending: false,
          productData: {},
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };