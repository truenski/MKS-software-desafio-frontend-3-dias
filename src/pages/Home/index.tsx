import Header from '../../components/Header'
import Products from '../../components/Products'
import ShoppingCartSideBar from '../../components/ShoppingCartSideBar'
import { useEffect, useState } from 'react'
import { Footer } from '../../components/Footer/styles'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import usePaginationStore from '../../store/pagination/usePagination'
import { useCycle, motion } from 'framer-motion'
import Pagination from '../../components/Pagination'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const App = () => {
    const [sidebarIsOpen, toggleSidebar] = useCycle(false, true)

    return (
        <>
            <Header handleSideBar={() => toggleSidebar()} />
            <ShoppingCartSideBar
                isOpen={sidebarIsOpen}
                handleSidebar={() => toggleSidebar()}
            />

            <div
                style={{
                    paddingTop: '1em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: '4em',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        style={{
                            width: 50,
                            height: 50,
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <MdKeyboardArrowLeft
                            style={{ width: 50, height: 50 }}
                            fill="black"
                        />
                    </motion.button>
                    <Products />
                    <motion.button
                        whileTap={{ scale: 0.8 }}
                        style={{
                            width: 50,
                            height: 50,
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <MdKeyboardArrowRight
                            style={{ width: 50, height: 50 }}
                            fill="black"
                        />
                    </motion.button>
                </div>
                <Pagination />
            </div>
            <Footer>MKS sistemas © Todos os direitos reservados</Footer>
        </>
    )
}

export default App
