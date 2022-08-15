/* eslint-disable import/no-anonymous-default-export */
import {
    ADD,
    QUANTITY_DECREASE,
    QUANTITY_INCREASE,
    REMOVE,
} from './actionTypes'
import { ShoppingCartActions, ShoppingCartState } from './types'

const initialState: ShoppingCartState = []

export default (state = initialState, action: ShoppingCartActions) => {
    switch (action.type) {
        case ADD:
            state.push(action.payload)
            return [...state]
        case REMOVE:
            state.splice(
                state.findIndex((x) => x.id === action.payload),
                1
            )
            return [...state]
        case QUANTITY_INCREASE:
            state[state.findIndex((x) => x.id === action.payload)].quantity += 1
            return [...state]

        case QUANTITY_DECREASE:
            state[state.findIndex((x) => x.id === action.payload)].quantity >
                1 &&
                (state[
                    state.findIndex((x) => x.id === action.payload)
                ].quantity -= 1)
            return [...state]

        default:
            return [...state]
    }
}
