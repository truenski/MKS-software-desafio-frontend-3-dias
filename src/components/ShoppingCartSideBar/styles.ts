import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SidebarText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    max-width: 180px;
    height: min-content;
    color: #ffffff;
    padding-left: 40px;
`

export const ExitSidebarButton = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 15px;
    background-color: #fff;
    cursor: pointer;
    width: 35px;
    height: 35px;
    padding: 0;
    border-radius: 100%;
    border: none;
    display: flex;
    position: static;
    margin: 30px;
    align-content: center;
    justify-content: center;
    align-items: center;
`

export const RemoveItem = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    background: #fff;
    width: 20px;
    height: 20px;
    padding: 0;
    border-radius: 100%;
    border: none;
    cursor: pointer;
    margin: -32px;
    margin-bottom: 70px;
    right: 0;
`

export const SidebarContainer = styled.div`
    overflow: hidden;
    margin: 0;
    padding: 0px;
    height: 100%;
    overflow: auto;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 700px) {
        width: 100%;
        height: auto;
        position: relative;
    }
`

export const ProductPhoto = styled.img`
    object-fit: contain;
    overflow: hidden;
    max-height: 67px;
    margin-left: -10px;
`

export const ProductContainer = styled(motion.li)`
    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 57px;
    padding: 23px;
    align-items: center;
    margin: 22px;
`

export const QuantityContainer = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    color: #000000;
    background: #ffffff;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
`

export const QuantityButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
        color: #e2e2e2;
    }
`

export const QuantityText = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 6px;

    color: #000000;
`

export const ProductPrice = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    align-self: flex-end;

    color: #000000;
`
export const ProductTotal = styled.div`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;

    color: #ffffff;
`

export const ProductTotalContainer = styled.div`
    display: flex;
    padding: 34px;
    width: 100%;
    background-color: #0d52b9;
    justify-content: space-around;
    margin-top: auto;
    z-index: 2;
`

export const ProductListContainer = styled.div`
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    z-index: 2;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const FinishBuyButton = styled.a`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    z-index: 2;
    text-decoration: none;
    line-height: 15px;
    display: flex;
    justify-content: center;
    color: #ffffff;
    background: #000000;
    border: none;
    padding: 30px;
    cursor: pointer;
`
