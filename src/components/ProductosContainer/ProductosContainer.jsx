import { Producto } from "../Producto/Producto"

const ProductosContainer = () => {

    const Prod1 = {
        nombre: "Helios",
        detalle: "Vela de purificación",
        img: "https://via.placeholder.com/100"
    }

    const Prod2 = {
        nombre: "Hermes",
        detalle: "Intencionar tu pedido",
        img: "https://via.placeholder.com/100"
    }

    return (
        <div>
            <Producto {...Prod1}/>
            <Producto {...Prod2}/>
        </div>
    )
}

export default ProductosContainer;