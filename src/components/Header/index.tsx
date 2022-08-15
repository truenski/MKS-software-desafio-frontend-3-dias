import { BiggerTitle, CartButton, HeaderContainer, NormalTitle } from './styles'
import { BsFillCartFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { getShoppingCartSelector } from '../../store/shoppingCart/selectors'

function Header({ handleSideBar }) {
    const shoppingCart = useSelector(getShoppingCartSelector)

    //useState + useEffect!!
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
