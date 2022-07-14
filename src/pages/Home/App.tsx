import Header from '../../components/Header';
import { GlobalStyle } from '../../styles';
import Products from '../../components/Products';
import ShoppingCartSideBar from '../../components/ShoppingCartSideBar';
import { useState } from 'react';
import { Footer } from '../../components/Footer/styles';

const App = () => {

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);



  
  return (
    <>
    <GlobalStyle/>
    <Header handleSideBar={()=>setSideBarIsOpen(prevState => !prevState)}/>
    {sideBarIsOpen?<ShoppingCartSideBar handleSideBar={()=>setSideBarIsOpen(prevState => !prevState)}/>:undefined}
    <Products></Products>
    <Footer>MKS sistemas © Todos os direitos reservados</Footer>
    
    </>
  );
};

export default App;