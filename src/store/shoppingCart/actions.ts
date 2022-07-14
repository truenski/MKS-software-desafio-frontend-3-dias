/* eslint-disable @typescript-eslint/no-redeclare */
import {
    REMOVE,
    ADD,
    QUANTITY_INCREASE,
    QUANTITY_DECREASE,
  } from "./actionTypes";
  import {
    FetchAdd,
    FetchQuantityDecrease,
    FetchQuantityIncrease,
    FetchRemove,
    ShoppingCartProduct,
  } from "./types";
  
 
  
  export const fetchAdd = (
    payload: ShoppingCartProduct
  ): FetchAdd => ({
    type: ADD,
    payload,
  });
  
  export const fetchRemove = (
    payload: number
  ): FetchRemove => ({
    type: REMOVE,
    payload,
  });

  export const fetchQuantityIncrease = (
    payload: number
  ): FetchQuantityIncrease => ({
    type: QUANTITY_INCREASE,
    payload,
  });

  export const fetchQuantityDecrease = (
    payload: number
  ): FetchQuantityDecrease => ({
    type: QUANTITY_DECREASE,
    payload,
  });