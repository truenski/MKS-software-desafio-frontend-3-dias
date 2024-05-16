import create from 'zustand'
import { EnumOrderBy, EnumSortBy } from '../../hooks/types'

interface ProductsState {
    page: number
    totalPages: number
    rows: number
    sortBy: EnumSortBy
    orderBy: EnumOrderBy
    setPage: (page: number) => void
    setTotalPages: (page: number) => void
    setRows: (rows: number) => void
    setSortBy: (sortBy: EnumSortBy) => void
    setOrderBy: (orderBy: EnumOrderBy) => void
    handleNavigateNext: () => void
    handleNavigatePrev: () => void
}

const usePaginationStore = create<ProductsState>((set, get) => ({
    page: 1,
    totalPages: 1,
    rows: 6,
    sortBy: EnumSortBy.ID,
    orderBy: EnumOrderBy.ASC,
    setPage: (page: number) => set({ page }),
    setTotalPages: (totalPages: number) => set({ totalPages }),
    setRows: (rows: number) => set({ rows }),
    setSortBy: (sortBy: EnumSortBy) => set({ sortBy }),
    setOrderBy: (orderBy: EnumOrderBy) => set({ orderBy }),
    handleNavigateNext: () => {
        const { page, totalPages } = get()
        if (page >= totalPages) {
            return
        }

        return set((state) => ({ page: state.page + 1 }))
    },
    handleNavigatePrev: () => {
        const { page } = get()
        if (page <= 1) {
            return
        }

        return set((state) => ({ page: state.page - 1 }))
    },
}))

export default usePaginationStore
