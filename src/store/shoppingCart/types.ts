import {
  ADD,
  QUANTITY_DECREASE,
  QUANTITY_INCREASE,
  REMOVE,
} from "./actionTypes";

export interface ShoppingCartProduct {
  id: number;
  name?: string;
  quantity: number;
  photo?: string;
  price?: string;
}

export type ShoppingCartState = ShoppingCartProduct[];

export type FetchAdd = {
  type: typeof ADD;
  payload: ShoppingCartProduct;
};

export type FetchRemove = {
  type: typeof REMOVE;
  payload: number;
};

export type productIndex = number

export type FetchQuantityIncrease = {
  type: typeof QUANTITY_INCREASE;
  payload: number;
};

export type FetchQuantityDecrease = {
  type: typeof QUANTITY_DECREASE;
  payload: number;
};

export type ShoppingCartActions =
  | FetchAdd
  | FetchRemove
  | FetchQuantityIncrease
  | FetchQuantityDecrease;
