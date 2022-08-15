import { useDispatch, useSelector } from 'react-redux'
import {
    fetchQuantityDecrease,
    fetchQuantityIncrease,
    fetchRemove,
} from '../../store/shoppingCart/actions'
import { getShoppingCartSelector } from '../../store/shoppingCart/selectors'
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

export default function ShoppingCartSideBar({ handleSideBar }) {
    const dispatch = useDispatch()
    const shoppingCart = useSelector(getShoppingCartSelector)

    const totalPrice = shoppingCart?.reduce((accumulator, object): any => {
        return accumulator + Number(object.price) * object.quantity
    }, 0)

    return (
        <SidebarContainer>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                }}
            >
                <SidebarText>Carrinho de compras</SidebarText>
                <ExitSidebarButton onClick={handleSideBar}>x</ExitSidebarButton>
            </div>
            <ProductListContainer>
                {shoppingCart?.map(
                    (product: ShoppingCartProduct, index: number) => (
                        <ProductContainer key={index}>
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
                                            dispatch(
                                                fetchQuantityIncrease(
                                                    product.id
                                                )
                                            )
                                        }
                                    >
                                        +
                                    </QuantityButton>
                                    <p>{product.quantity}</p>
                                    <QuantityButton
                                        onClick={() =>
                                            dispatch(
                                                fetchQuantityDecrease(
                                                    product.id
                                                )
                                            )
                                        }
                                    >
                                        -
                                    </QuantityButton>
                                </QuantityContainer>
                            </div>
                            <ProductPrice>
                                R$
                                {Number(product.price).toLocaleString('de-DE')}
                            </ProductPrice>
                            <RemoveItem
                                onClick={() =>
                                    dispatch(fetchRemove(product.id))
                                }
                            >
                                x
                            </RemoveItem>
                        </ProductContainer>
                    )
                )}
            </ProductListContainer>
            <ProductTotalContainer>
                <ProductTotal>Total:</ProductTotal>
                <ProductTotal>
                    R${totalPrice?.toLocaleString('de-DE')}
                </ProductTotal>
            </ProductTotalContainer>
            <FinishBuyButton>Finalizar Compra</FinishBuyButton>
        </SidebarContainer>
    )
}
