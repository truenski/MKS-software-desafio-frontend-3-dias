import { createSelector } from 'reselect'
import { ShoppingCartProduct } from './types'
import { AppState } from '../rootReducer'

const getShoppingCart = (state: AppState) =>
    state.shoppingCart as ShoppingCartProduct[]

export const getShoppingCartSelector = createSelector(
    getShoppingCart,
    (state) => state
)
