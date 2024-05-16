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

export enum EnumSortBy {
    ID = 'id',
    NAME = 'name',
    PRICE = 'price',
    BRAND = 'brand',
}

export enum EnumOrderBy {
    ASC = 'ASC',
    DESC = 'DESC',
}
