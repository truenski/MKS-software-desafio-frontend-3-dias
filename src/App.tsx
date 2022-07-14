import './App.css';
import Header from './Components/Header';
import { GlobalStyle } from './styles';
import Products from './Components/Products';
import ShoppingCartSideBar from './Components/ShoppingCartSideBar';
import { useState } from 'react';
import { Footer } from './Components/Footer/styles';

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