import { ItemList } from "../components"
import { catalogo } from "../data/catalogo"

export const HomePage = () => {
  
    

    return (
   
        <>
            <h1>HomePage</h1>
            <hr />
            
            
            <div className="row rows-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4  g-3 align-items-center">

                {
                    catalogo.map( product => (
                        <ItemList key={product.id} {...product}/>
                    ))
                }
            </div> 

        </>
    )
}
