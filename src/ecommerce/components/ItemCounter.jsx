import { useContext, useState } from "react"
import { CartContext } from "../context/cartContext"

export const ItemCounter = ({ setQuantitySelected , item }) => {
  
    const { addProductToCart } = useContext( CartContext )

    const [counter, setCounter] = useState(0)


    
    const incrementar = ()=>{
        if ( counter === item.stock) return; 
        setCounter( counter + 1)
    }
    
    const decrementar = ()=>{
        if( counter === 0 ) return;
        setCounter( counter - 1)
    }
        
    const onAdd = ()=>{
        if(counter === 0 ) return;
        setQuantitySelected(counter)
        addProductToCart({...item, cantidad: counter } )
    }


    return (
        <>
        
            <button type="button" className="btn m-1 btn-outline-primary" onClick={ onAdd } >Añadir al Carro</button>
            <button className="btn btn-outline-dark m-1" onClick={ incrementar }>+</button>
            <button className="btn btn-outline-dark m-1" style={{ display:`${(counter <= 0)? "none" : "inline-block"}`}}>{counter}</button>
            <button 
            className="btn btn-outline-dark m-1" 
            style={{ display:`${(counter === 0)? "none" : "inline-block"}`}} onClick={ decrementar }>-</button>
            
        </>
    )
}
