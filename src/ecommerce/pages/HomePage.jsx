import { ItemList } from "../components"
import { getAllProducts } from "../data/getProductsFirebase"
import { getFirebaseDataById } from "../helpersfirebase/getFirebaseDataById";


export const HomePage = () => {
 
    const items = getAllProducts();

    const itemsID = getFirebaseDataById()
    
    return (
   
        <>
            <h1>HomePage</h1>
            <hr />
            
            
            <div className="row rows-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4  g-3 align-items-center m-3">

                {
                    items.map( item => (
                        <ItemList key={item.id} item={item}/>
                    ))
                }
            </div> 

        </>
    )
}
