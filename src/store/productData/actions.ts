import {
    FETCH_PRODUCT_DATA_REQUEST,
    FETCH_PRODUCT_DATA_FAILURE,
    FETCH_PRODUCT_DATA_SUCCESS,
  } from "./actionTypes";
  import {
    FetchProductDataRequest,
    FetchProductDataSuccess,
    FetchProductDataSuccessPayload,
    FetchProductDataFailure,
    FetchProductDataFailurePayload,
  } from "./types";
  
  export const fetchProductDataRequest = (): FetchProductDataRequest => ({
    type: FETCH_PRODUCT_DATA_REQUEST,
  });
  
  export const fetchProductDataSuccess = (
    payload: FetchProductDataSuccessPayload
  ): FetchProductDataSuccess => ({
    type: FETCH_PRODUCT_DATA_SUCCESS,
    payload,
  });
  
  export const fetchProductDataFailure = (
    payload: FetchProductDataFailurePayload
  ): FetchProductDataFailure => ({
    type: FETCH_PRODUCT_DATA_FAILURE,
    payload,
  });