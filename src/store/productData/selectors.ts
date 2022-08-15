import { createSelector } from 'reselect'

import { AppState } from '../rootReducer'

const getPending = (state: AppState) => state.productData.pending

const getProductData = (state: AppState) => state.productData.productData

const getError = (state: AppState) => state.productData.error

export const getProductDataSelector = createSelector(
    getProductData,
    (productData) => productData
)

export const getPendingSelector = createSelector(
    getPending,
    (pending) => pending
)

export const getErrorSelector = createSelector(getError, (error) => error)
