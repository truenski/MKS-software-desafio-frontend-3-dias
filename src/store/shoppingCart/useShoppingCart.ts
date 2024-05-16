import create from 'zustand'
import { ShoppingCartProduct } from './types'

interface ShoppingCartState {
    items: ShoppingCartProduct[]
    addItem: (item: ShoppingCartProduct) => void
    removeItem: (id: number) => void
    increaseQuantity: (id: number) => void
    decreaseQuantity: (id: number) => void
}

const useShoppingCartStore = create<ShoppingCartState>((set, get) => ({
    items: [],
    addItem: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id)
        if (existingItem) {
            set({
                items: get().items.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
            })
        } else {
            set({ items: [...get().items, item] })
        }
    },
    removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) })
    },
    increaseQuantity: (id) => {
        set({
            items: get().items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
        })
    },
    decreaseQuantity: (id) => {
        set({
            items: get().items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ),
        })
    },
}))

export default useShoppingCartStore
