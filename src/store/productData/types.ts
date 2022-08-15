import {
    FETCH_PRODUCT_DATA_REQUEST,
    FETCH_PRODUCT_DATA_SUCCESS,
    FETCH_PRODUCT_DATA_FAILURE,
} from './actionTypes'

export interface Products {
    products?: Product[]
    count?: number
}

export interface Product {
    id: number
    name: string
    brand: string
    description: string
    photo: string
    price: string
    createdAt: string
    updatedAt: string
}

export interface ProductDataState {
    pending: boolean
    productData: Products
    error: string | null
}

export interface FetchProductDataSuccessPayload {
    productData: Products
}

export interface FetchProductDataFailurePayload {
    error: string
}

export interface FetchProductDataRequest {
    type: typeof FETCH_PRODUCT_DATA_REQUEST
}

export type FetchProductDataSuccess = {
    type: typeof FETCH_PRODUCT_DATA_SUCCESS
    payload: FetchProductDataSuccessPayload
}

export type FetchProductDataFailure = {
    type: typeof FETCH_PRODUCT_DATA_FAILURE
    payload: FetchProductDataFailurePayload
}

export type ProductDataActions =
    | FetchProductDataRequest
    | FetchProductDataSuccess
    | FetchProductDataFailure
