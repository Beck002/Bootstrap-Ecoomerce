import { Link } from 'react-router-dom'
import { ItemCounter } from './ItemCounter'

export const ItemList = ({ imagenURL, nombre, precio, id }) => {

    return (
        <div className="col animate__animated animate__fadeIn">
            
            <div className="card" style={{width: "18rem"}}>
                <img src={ imagenURL } className="card-img-top" alt={ nombre }/>
                <div className="card-body">
                    <h5 className="card-title">{ nombre }</h5>
                    <h6>{precio}</h6>
                    <p className="card-text">descripcion</p>

                    <Link to={`/product/${id}`} className="btn btn-outline-dark m-1">Ver</Link>
                    <ItemCounter />
                </div>
            </div>

          
        </div>
    )
  
}
