import { createContext, useContext } from "react";
import "./App.css";
import ItemDetailContainer from "./componentes/itemDetailContainer/ItemDetailContainer";
import NavBar from "./componentes/navBar/NavBar.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage"
import { CartContextProvider } from "./storage/cartContext";
import Checkout from "./componentes/checkout/Checkout.jsx";
import CartContainer from "./componentes/cartContainer/cartContainer";
import OrderDetails from "./componentes/orderDetails/OrderDetails";
//import { exportData, exportDataWithBatch } from "./services/firebase";
//componente App
function App() {

  function handleLogin(username) {
    alert(`${username} Iniciaste sesión`);
  }

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar onLogin={handleLogin} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gender/:genderid" element={<HomePage />} />
            <Route path="/item/:itemid" element={<ItemDetailContainer />} />
            <Route path="/carroCompra" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you/:orderid" element={<OrderDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}
       
export default App;
