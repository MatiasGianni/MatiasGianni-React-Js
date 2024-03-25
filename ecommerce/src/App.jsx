import { NavBar } from "./components/Navbar/NavBar"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="ContComponent">
      <NavBar />
      <ItemListContainer title={'Tienda'} />
      <h2>Hola mundo</h2>
    </div>
  )
}
export default ContComponent