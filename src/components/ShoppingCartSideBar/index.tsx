import { ShoppingCartProduct } from '../../store/shoppingCart/types'
import {
    ExitSidebarButton,
    FinishBuyButton,
    ProductContainer,
    ProductListContainer,
    ProductPhoto,
    ProductPrice,
    ProductTotal,
    ProductTotalContainer,
    QuantityButton,
    QuantityContainer,
    QuantityText,
    RemoveItem,
    SidebarContainer,
    SidebarText,
} from './styles'
import { motion } from 'framer-motion'
import { IoCloseCircleSharp } from 'react-icons/io5'

import useShoppingCartStore from '../../store/shoppingCart/useShoppingCart'
import { useDimensions } from '../../hooks/useDimensions'
import { useEffect, useRef } from 'react'

type ShoppingCartSideBarProps = {
    handleSidebar: () => void
    isOpen: boolean
}

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        display: 'block',
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(30px at 40px 40px)',
        display: 'none',

        transition: {
            delay: 0.2,

            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
}

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const variantsLi = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,

        transition: {
            y: { stiffness: 1000 },
        },
    },
}

export default function ShoppingCartSideBar({
    handleSidebar,
    isOpen,
}: ShoppingCartSideBarProps) {
    const {
        items: shoppingCart,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
    } = useShoppingCartStore()
    const containerRef = useRef<HTMLDivElement>(null)

    const { height } = useDimensions(containerRef)

    const totalPrice = shoppingCart?.reduce((accumulator, object): any => {
        return accumulator + Number(object.price) * object.quantity
    }, 0)

    useEffect(() => {
        //click outside should close sidebar, except for button tags
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node

            const isButtonOrChildOfButton = (
                node: Node
            ): node is HTMLButtonElement => {
                if (node instanceof HTMLButtonElement) {
                    return true
                }

                return node.parentNode
                    ? isButtonOrChildOfButton(node.parentNode)
                    : false
            }

            if (
                containerRef.current &&
                !containerRef.current.contains(target) &&
                !isButtonOrChildOfButton(target)
            ) {
                handleSidebar()
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleClickOutside, true)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [isOpen, handleSidebar])

    return (
        <motion.nav
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '400px',
                zIndex: isOpen ? 3 : 2,
            }}
            ref={containerRef}
            custom={height}
            animate={isOpen ? 'open' : 'closed'}
            initial="closed"
            variants={sidebar}
        >
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: '400px',
                    background: '#0D52B9',
                    height: '100%',
                    zIndex: 2,
                    boxShadow: '-5px 0px 6px rgba(0,0,0,0.13)',
                }}
            />
            <SidebarContainer>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        zIndex: isOpen ? 2 : 1,
                    }}
                >
                    <SidebarText>Carrinho de compras</SidebarText>
                    <ExitSidebarButton onClick={handleSidebar}>
                        <IoCloseCircleSharp
                            viewBox="50 50 412 412"
                            size="35px"
                            color="#000"
                        />
                    </ExitSidebarButton>
                </div>
                <ProductListContainer>
                    <motion.ul
                        style={{
                            listStyleType: 'none',
                            padding: 0,
                            paddingBottom: '20vh',
                        }}
                        variants={variants}
                    >
                        {shoppingCart?.map(
                            (product: ShoppingCartProduct, index: number) => (
                                <ProductContainer
                                    variants={variantsLi}
                                    whileTap={{ scale: 0.95 }}
                                    key={index}
                                >
                                    <ProductPhoto
                                        src={product.photo}
                                        alt={product.name}
                                    />
                                    <div style={{ maxWidth: '23%' }}>
                                        {product.name}
                                    </div>
                                    <div>
                                        <QuantityText>Qtd:</QuantityText>
                                        <QuantityContainer>
                                            <QuantityButton
                                                onClick={() =>
                                                    increaseQuantity(product.id)
                                                }
                                            >
                                                +
                                            </QuantityButton>
                                            <p>{product.quantity}</p>
                                            <QuantityButton
                                                onClick={() =>
                                                    decreaseQuantity(product.id)
                                                }
                                            >
                                                -
                                            </QuantityButton>
                                        </QuantityContainer>
                                    </div>
                                    <ProductPrice>
                                        R$
                                        {Number(product.price).toLocaleString(
                                            'de-DE'
                                        )}
                                    </ProductPrice>
                                    <RemoveItem
                                        onClick={() => removeItem(product.id)}
                                    >
                                        <IoCloseCircleSharp
                                            viewBox="50 50 412 412"
                                            size="20px"
                                            color="#000"
                                        />
                                    </RemoveItem>
                                </ProductContainer>
                            )
                        )}
                    </motion.ul>
                </ProductListContainer>
                {isOpen && (
                    <div
                        style={{
                            width: '400px',
                            zIndex: 2,
                            position: 'fixed',
                            bottom: 0,
                        }}
                    >
                        <ProductTotalContainer>
                            <ProductTotal>Total:</ProductTotal>
                            <ProductTotal>
                                R${totalPrice?.toLocaleString('de-DE')}
                            </ProductTotal>
                        </ProductTotalContainer>
                        <FinishBuyButton
                            target="_blank"
                            href="https://kesneymendes.com"
                        >
                            Finalizar Compra
                        </FinishBuyButton>
                    </div>
                )}
            </SidebarContainer>
        </motion.nav>
    )
}
