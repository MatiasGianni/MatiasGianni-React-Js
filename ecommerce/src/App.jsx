import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path="/" element={<ItemListContainer title="Tienda de Zapatillas" />} />

        <Route path="/categoria/:categoryId" element={<ItemListContainer title="Tienda de Zapatillas" />} />

        <Route path="/producto/:productId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
