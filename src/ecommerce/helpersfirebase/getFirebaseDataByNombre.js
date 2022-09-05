import { getAllProducts } from "../data/getProductsFirebase"


export const getFirebaseDataByNombre = ( name = '') => {

    name = name.toLocaleLowerCase().trim()
    const productList = getAllProducts()
    
    if(name.length === 0 ) return productList;

    return productList.filter(item => item.nombre.toLocaleLowerCase().includes( name ) )

}



