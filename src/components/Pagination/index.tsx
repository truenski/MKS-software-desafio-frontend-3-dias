import React, { useState } from 'react'
import { Dot, PaginationContainer } from './styles'
import usePaginationStore from '../../store/pagination/usePagination'

function Pagination() {
    const { page: activePage, setPage, totalPages } = usePaginationStore()

    const handleDotClick = (page) => {
        setPage(page)
    }

    return (
        <PaginationContainer>
            {[...Array(totalPages)].map((_, index) => (
                <Dot
                    key={index + 1}
                    isActive={activePage === index + 1}
                    onClick={() => handleDotClick(index + 1)}
                />
            ))}
        </PaginationContainer>
    )
}

export default Pagination
