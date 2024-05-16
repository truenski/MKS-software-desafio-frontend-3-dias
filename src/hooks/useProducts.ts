import { useQuery } from '@tanstack/react-query'
import { EnumOrderBy, EnumSortBy, Product } from './types'
import { queryClient } from '..'
import usePaginationStore from '../store/pagination/usePagination'
import { useEffect } from 'react'

export interface FetchProductsParams {
    page?: number
    rows?: number
    sortBy?: EnumSortBy
    orderBy?: EnumOrderBy
}

export interface FetchProductsResponse {
    products: Product[]
    count: string
}

export const fetchProducts = async ({
    page = 1,
    rows = 6,
    sortBy = EnumSortBy.ID,
    orderBy = EnumOrderBy.ASC,
}: FetchProductsParams = {}): Promise<FetchProductsResponse> => {
    const params = new URLSearchParams()
    params.append('page', page.toString())
    params.append('rows', rows.toString())
    params.append('sortBy', sortBy)
    params.append('orderBy', orderBy)

    const response = await fetch(
        `https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?${params.toString()}`
    )
    return response.json()
}

export const useProducts = (params?: FetchProductsParams) => {
    const { data, isLoading, error } = useQuery<FetchProductsResponse, Error>({
        queryKey: ['products', params],
        queryFn: (): Promise<FetchProductsResponse> =>
            fetchProducts(params || {}),
    })
    const { rows, setTotalPages } = usePaginationStore()

    useEffect(() => {
        if (data) {
            const totalPages = Math.ceil(
                parseInt(data.count || '0') / (params?.rows || rows)
            )
            setTotalPages(totalPages)
        }
    }, [data])

    return { data, isLoading, error }
}
