import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchProductDataFailure, fetchProductDataSuccess } from "./actions";
import { FETCH_PRODUCT_DATA_REQUEST } from "./actionTypes";
import { Products } from "./types";

const getProductData = () =>
  axios.get<Products>('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=20&sortBy=id&orderBy=ASC');

/*
  Worker Saga: Fired on FETCH_PRODUCT_DATA_REQUEST action
*/
function* fetchProductDataSaga() {
  try {
    const response = yield call(getProductData);
    yield put(
      fetchProductDataSuccess({
        productData: response.data,
      })
    );
  } catch (e:any) {
    yield put(
      fetchProductDataFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_PRODUCT_DATA_REQUEST` action.
  Allows concurrent increments.
*/
function* productDataSaga() {
  yield all([takeLatest(FETCH_PRODUCT_DATA_REQUEST, fetchProductDataSaga)]);
}

export default productDataSaga;