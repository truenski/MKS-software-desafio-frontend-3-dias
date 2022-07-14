import styled from "styled-components";

export const HeaderContainer = styled.div`

position: absolute;
    top: 0;
width: 100vw;
height: 101px;
justify-content: space-between;
background: #0F52BA;
display:flex;
align-items:center;
overflow:hidden;`
 


export const NormalTitle = styled.div`
margin-left:10px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 300;
font-size: 20px;
line-height: 19px;
/* or 95% */


color: #FFFFFF;

mix-blend-mode: normal;`




export const BiggerTitle = styled(NormalTitle)`
margin-left:3vw;
font-weight: 600;
font-size: 40px;
line-height: 19px;
/* or 48% */

`
export const CartButton = styled.button`
display:flex;
align-items:center;
justify-content:space-around;
margin-right:3vw;
cursor:pointer;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 22px;
width: 90px;
height: 45px;
top: 29px;
border-radius: 8px;



`
