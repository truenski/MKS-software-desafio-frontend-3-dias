import {
    BuyButton,
    Container,
    ContainerPriceName,
    Description,
    Name,
    Price,
    ProductPhoto,
    ProductsContainer,
} from './styles'
import { BsFillBagFill } from 'react-icons/bs'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductDataRequest } from '../../store/productData/actions'
import {
    getPendingSelector,
    getProductDataSelector,
    getErrorSelector,
} from '../../store/productData/selectors'
import { Product, Products } from '../../store/productData/types'
import Skeleton from '../Skeleton'
import {
    fetchAdd,
    fetchQuantityIncrease,
} from '../../store/shoppingCart/actions'
import { getShoppingCartSelector } from '../../store/shoppingCart/selectors'

function Header() {
    const dispatch = useDispatch()
    const pending = useSelector(getPendingSelector)
    const productData: Products = useSelector(getProductDataSelector)
    const error = useSelector(getErrorSelector)
    const shoppingCart = useSelector(getShoppingCartSelector)

    useEffect(() => {
        dispatch(fetchProductDataRequest())
    }, [])

    const skeletons = Array(8).fill(
        <Container>
            <Skeleton />
        </Container>
    )

    const addToCart = (product: Product, index: number) => {
        if (
            shoppingCart &&
            shoppingCart.some((prod) => prod.id === product.id)
        ) {
            dispatch(fetchQuantityIncrease(product.id))
        } else {
            dispatch(
                fetchAdd({
                    id: product.id,
                    name: product.name,
                    quantity: 1,
                    photo: product.photo,
                    price: product.price,
                })
            )
        }
    }

    return (
        <ProductsContainer>
            {pending ? (
                <>{skeletons}</>
            ) : error ? (
                <div>Erro!</div>
            ) : (
                productData?.products?.map(
                    (product: Product, index: number) => (
                        <Container key={index}>
                            <ProductPhoto
                                src={product.photo}
                                alt={product.brand}
                            />
                            <div style={{ padding: '10px' }}>
                                <ContainerPriceName>
                                    <Name>{product.name}</Name>
                                    <Price>
                                        R$
                                        {Number(product.price).toLocaleString(
                                            'de-DE'
                                        )}
                                    </Price>
                                </ContainerPriceName>
                                <Description>{product.description}</Description>
                            </div>
                            <BuyButton
                                onClick={() => addToCart(product, index)}
                            >
                                <BsFillBagFill /> COMPRAR
                            </BuyButton>
                        </Container>
                    )
                )
            )}
        </ProductsContainer>
    )
}

export default Header
