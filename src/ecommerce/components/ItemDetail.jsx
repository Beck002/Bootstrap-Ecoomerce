import { useState } from "react"
import { Link } from 'react-router-dom';
import { ItemCounter } from "./ItemCounter"


export const ItemDetail = ({ item }) => {

    const [quantitySelected, setQuantitySelected] = useState(0)


    const resetQuantity = ()=>{
        setQuantitySelected(0)
    }

    return (

        <div className="row mt-5" > 
            <div className="col-4">
                <img 
                src={ item.imagenURL }
                alt={ item.nombre }
                className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{ item.nombre }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Precio:</b> ${item.precio} </li>
                    <li className="list-group-item"> <b>Descripcion:</b> { item.descripcion } </li>
                </ul>

                <h5 className="mt-3"> Metodos de pago y mas </h5>
                <p>{item.descripcion}</p>
                <div className="grid gap-2 d-md-block">
         
                    <ItemCounter  setQuantitySelected={setQuantitySelected} quantitySelected={quantitySelected} item={item}/>
                    
                    { ( quantitySelected > 0  ) ? <Link to="/cart" className="btn m-1 btn-outline-primary">Terminar compra</Link> : null}
                </div>
                <button className="btn btn-primary" onClick={ resetQuantity }>Reset Cantidad</button>
                <p>Stock: {item.stock} | Cantidad: {quantitySelected}</p>
                <p>total del producto: ${ quantitySelected * item.precio}</p>
            

            </div>

        </div>
    )
  
}
