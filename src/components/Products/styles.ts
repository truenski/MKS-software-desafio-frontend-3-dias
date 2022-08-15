import styled from 'styled-components'

export const ProductsContainer = styled.div`
    display: flex;
    padding: 5em 8em;
    margin-top: 10vh;
    gap: 40px;
    max-width: 1000px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const ProductPhoto = styled.img`
    object-fit: contain;
    overflow: hidden;
`

export const Container = styled.div`
    width: 217px;
    height: 285px;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    justify-content: flex-end;
`

export const Name = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    padding: 0 5px;
    color: #2c2c2c;
    width: 50%;
    display: inline;
    margin: 0;
`

export const ContainerPriceName = styled.div`
    display: flex;
`

export const Price = styled.div`
    background: #373737;
    border-radius: 5px;
    width: min-content;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 15px;
    /* or 100% */
    padding: 5px;
    height: 26px;
    padding: 0 5px;
    align-self: center;
    display: flex;
    align-items: center;

    color: #ffffff;
`

export const Description = styled.p`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 0;
    /* or 120% */

    color: #2c2c2c;
`

export const BuyButton = styled.button`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    color: white;
    display: flex;
    background: #0f52ba;
    border-radius: 0px 0px 8px 8px;
    border: transparent;
    padding: 8px;
    justify-content: center;
    gap: 10px;
`
