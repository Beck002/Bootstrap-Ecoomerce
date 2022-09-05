import { Link } from 'react-router-dom'

export const ItemList = ( {item} ) => {
   

    return (
        <div className="col animate__animated animate__fadeIn">
            
            <div className="card" style={{width: "18rem"}}>
                <img src={ item.imagenURL } className="card-img-top" alt={ item.nombre }/>
                <div className="card-body">
                    <h5 className="card-title">{ item.nombre }</h5>
                    <h6>${item.precio}</h6>

                    <Link to={`/product/${item.id}`} className="btn btn-outline-dark m-1">Ver</Link>

                </div>
            </div>
          
        </div>
    )
  
}
