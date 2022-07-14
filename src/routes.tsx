import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route element={<Home />}   path="/" />
       </BrowserRouter>
   )
}

export default Routes;