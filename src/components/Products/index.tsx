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

import { Product } from '../../hooks/types'
import Skeleton from '../Skeleton'
import { useProducts } from '../../hooks/useProducts'
import usePaginationStore from '../../store/pagination/usePagination'
import useShoppingCartStore from '../../store/shoppingCart/useShoppingCart'

function Products() {
    const { orderBy, page, rows, sortBy } = usePaginationStore()
    const {
        items: shoppingCart,
        addItem,
        increaseQuantity,
    } = useShoppingCartStore()

    const {
        data: productsData,
        isLoading,
        error,
    } = useProducts({
        page,
        rows,
        sortBy,
        orderBy,
    })

    // useEffect(() => {
    //     prefetchProducts()
    // }, [page])

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
            increaseQuantity(product.id)
        } else {
            addItem({
                id: product.id,
                name: product.name,
                quantity: 1,
                photo: product.photo,
                price: product.price,
            })
        }
    }

    return (
        <ProductsContainer>
            {isLoading ? (
                <>{skeletons}</>
            ) : error ? (
                <div>Erro! </div>
            ) : (
                productsData?.products?.map(
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

export default Products
