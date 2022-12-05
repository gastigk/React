import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ProductosContainer from "./components/ProductosContainer/ProductosContainer"

const App = () => {



  return (
    <div>

      <NavBar />

      <ItemListContainer greeting="Ancestral - Sabiduría que ilumina"/>

      <ProductosContainer />

    </div>
  );

}

export default App;