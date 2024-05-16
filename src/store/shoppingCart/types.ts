export interface ShoppingCartProduct {
    id: number
    name?: string
    quantity: number
    photo?: string
    price?: string
}

export type ShoppingCartState = ShoppingCartProduct[]
