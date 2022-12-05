import './Producto.css'

export const Producto = ( {img, nombre, detalle} ) => {
    
    return (
        <article className="producto">
            <img className="producto__img" src={img} alt=""/>
            <div className="producto__content">
                <h2>{nombre}</h2>
                <p>{detalle}</p>
            </div>
        </article>
    )
}

export default Producto;