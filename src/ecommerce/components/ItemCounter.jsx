import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext"
import { getCatalogoById } from "../helpers/getCatalogoById"

export const ItemCounter = ({ setQuantitySelected, stock, id, quantitySelected }) => {
  
    const { addProductToCart, cartProducts } = useContext( CartContext )

    const [counter, setCounter] = useState(0)


    

    const incrementar = ()=>{
        if ( counter === stock) return; 
        setCounter( counter + 1)
    }

    const decrementar = ()=>{
        if( counter === 0 ) return;
        setCounter( counter - 1)
    }

    const onAdd = ()=>{
        addProductToCart(getCatalogoById(id))
        setQuantitySelected((counter + quantitySelected <= stock) ? counter + quantitySelected : quantitySelected )
    }


    return (
        <>
            <button type="button" className="btn m-1 btn-outline-primary" onClick={()=>{setQuantitySelected(counter), onAdd()}} >Añadir al Carro</button>
            <button className="btn btn-outline-dark m-1" onClick={ incrementar }>+</button>
            <button className="btn btn-outline-dark m-1" style={{ display:`${(counter <= 0)? "none" : "inline-block"}`}}>{counter}</button>
            <button 
            className="btn btn-outline-dark m-1" 
            style={{ display:`${(counter === 0)? "none" : "inline-block"}`}} onClick={ decrementar }>-</button>
            
        </>
    )
}
