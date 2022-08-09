import { useState } from "react"

export const ItemCounter = ({ setQuantitySelected, stock }) => {
  
    const [counter, setCounter] = useState(0)

    const incrementar = ()=>{
        if ( counter === stock) return; 
        setCounter( counter + 1)
    }

    const decrementar = ()=>{
        if( counter === 0 ) return;
        setCounter( counter - 1)
        setQuantitySelected( counter -1 )
        console.log(counter);
    }


    return (
        <>
            <button type="button" className="btn m-1 btn-outline-primary" onClick={()=>setQuantitySelected(counter)} >Añadir al Carro</button>
            <button className="btn btn-outline-dark m-1" onClick={ incrementar }>+</button>
            <button className="btn btn-outline-dark m-1" style={{ display:`${(counter <= 0)? "none" : "inline-block"}`}}>{counter}</button>
            <button 
            className="btn btn-outline-dark m-1" 
            style={{ display:`${(counter === 0)? "none" : "inline-block"}`}} onClick={ decrementar }>-</button>
            
        </>
    )
}
