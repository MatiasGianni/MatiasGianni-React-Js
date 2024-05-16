import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { ContextProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import FooTer from "./components/Footer/FooTer";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <BrowserRouter>

    <ContextProvider>

      <NavBar />

      <Routes>

        <Route path="/" element={<ItemListContainer title="Tienda de Zapatillas" />} />

        <Route path="/categoria/:categoryId" element={<ItemListContainer title="Tienda de Zapatillas" />} />

        <Route path="/producto/:productId" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>

      <FooTer />

    </ContextProvider>
      
    </BrowserRouter>
  );
}

export default App;
