import { useState } from "react"

export const Counter = () => {
  
    const [counter, setCounter] = useState(0)

    const incrementar = ()=>{
        setCounter( counter + 1)
    }
    const decrementar = ()=>{
        if( counter === 0 ) return;
        setCounter( counter - 1)
    }
    

    return (
        
        <>
            <button className="btn btn-primary m-1" onClick={ incrementar }>+</button>
            <button className="btn btn-primary m-1">{counter}</button>
            <button className="btn btn-primary m-1" onClick={ decrementar }>-</button>

        </>
    )
}
