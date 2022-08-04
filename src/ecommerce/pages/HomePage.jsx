import { ItemList } from "../components"
import { catalogo } from "../data/catalogo"

export const HomePage = () => {
  
    

    return (
   
        <>
            <h1>HomePage</h1>
            <hr />

            {
                catalogo.map( item =>(
                    <ItemList key={item.id} {...item}/>
                ))
            }
    
        </>
    )
}
