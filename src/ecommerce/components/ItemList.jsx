import { Link } from 'react-router-dom'
import { Counter } from './Counter'




export const ItemList = ({ imagenURL, nombre, precio, id }) => {
  
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">

                <div className="row no-gutters">
                    
                    <div className="col-4">
                        <img src={ imagenURL } className="card-img" alt={ nombre } />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h5 className="card-title">{ nombre }</h5>
                            <p className="card-text">Precio: ${ precio }</p>

              

                            <p className="card-text">
                                <small className="text-muted">descripcion</small>
                            </p>

                            <Counter />

                            <Link to={`/product/${ id }`}>
                                ver..
                            </Link>

                            
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
  
}
