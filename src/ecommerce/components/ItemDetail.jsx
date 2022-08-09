import { useState } from "react"
import { Link } from 'react-router-dom';
import { ItemCounter } from "./ItemCounter"


export const ItemDetail = ({ nombre, id, precio, marca, imagenURL, descripcion, stock}) => {

    const [quantitySelected, setQuantitySelected] = useState(0)

    
    return (

        <div className="row mt-5" > 
            <div className="col-4">
                <img 
                src={ imagenURL }
                alt={ nombre }
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{ nombre }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Precio:</b> ${precio} </li>
                    <li className="list-group-item"> <b>Marca:</b>{marca}</li>
                    <li className="list-group-item"> <b>Descripcion:</b> { descripcion } </li>
                </ul>

                <h5 className="mt-3"> Metodos de pago y mas </h5>
                <p>{descripcion}</p>
                <div className="grid gap-2 d-md-block">
                    <ItemCounter  setQuantitySelected={setQuantitySelected} stock={stock} />
                    { ( quantitySelected > 0  ) ? <Link to="/cart" className="btn m-1 btn-outline-primary">Terminar compra</Link> : null}
                </div>

            </div>

        </div>
    )
  
}
