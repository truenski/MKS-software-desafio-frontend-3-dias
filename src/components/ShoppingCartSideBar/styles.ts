import styled from "styled-components";

export const SidebarText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  max-width: 180px;
  height: min-content;
  color: #ffffff;
  padding-left: 40px;
`;

export const ExitSidebarButton = styled.button`
font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 15px;
    background: #000000;
    color: #FFFFFF;
    border-radius: 100%;
    border: none;
    display: flex;
    padding: 12px;
    position: static;
    margin: 40px;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
}

`;

export const RemoveItem = styled.button`
font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 15px;
    background: #000000;
    color: #FFFFFF;
    border-radius: 100%;
    border: none;
    padding: 5px;
    cursor: pointer;
    margin: -32px;
    margin-bottom: 70px;
    right: 0;
`



export const SidebarContainer = styled.div`
overflow:hidden;
background: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0,0,0,0.13);
    width: 486px;
    margin: 0;
    padding: 0px;
    position: fixed;
    height: 100%;
    overflow: auto;
    text-align: left;
    top: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 700px) {
   
width: 100%;
height: auto;
position: relative;
    
`;

export const ProductPhoto = styled.img`
  object-fit: contain;
  overflow: hidden;
  max-height: 67px;
  margin-left: -10px;
`

export const ProductContainer = styled.div`
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 57px;
  width: 360px;
  padding: 23px;
  align-items: center;
  margin: 22px;
`;

export const QuantityContainer = styled.div`
  font-family: "Montserrat";
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
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #e2e2e2;
  }
`;

export const QuantityText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 6px;

  color: #000000;
`;

export const ProductPrice = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  align-self: flex-end;

  color: #000000;
`;
export const ProductTotal = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;

  color: #ffffff;
`;

export const ProductTotalContainer = styled.div`
display: flex;
padding: 34px;
width: 100%;
justify-content: space-around;
margin-top: auto;
}`;

export const ProductListContainer = styled.div`
overflow-y:auto;
-ms-overflow-style: none;  
    scrollbar-width: none;
    &::-webkit-scrollbar { 
      display: none; 
  }
`

export const FinishBuyButton = styled.button`
font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    height: 80px;
    width: 100%;
    color: #FFFFFF;
    background: #000000;
    border: none;
    padding: 30px;
    cursor: pointer;
`