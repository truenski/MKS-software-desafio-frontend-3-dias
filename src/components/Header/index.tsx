import { BiggerTitle, CartButton, HeaderContainer, NormalTitle } from './styles'
import { BsFillCartFill } from 'react-icons/bs'
import useShoppingCartStore from '../../store/shoppingCart/useShoppingCart'

function Header({ handleSideBar }) {
    const { items: shoppingCart } = useShoppingCartStore()
    let countShoppingCartItems = 0

    shoppingCart.forEach((item) => {
        countShoppingCartItems += item.quantity
    })

    return (
        <HeaderContainer>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'baseline',
                }}
            >
                <BiggerTitle>MKS</BiggerTitle>
                <NormalTitle>Sistemas</NormalTitle>
            </div>
            <CartButton onClick={handleSideBar}>
                <BsFillCartFill />
                {countShoppingCartItems}
            </CartButton>
        </HeaderContainer>
    )
}

export default Header
