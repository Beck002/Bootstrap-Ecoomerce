import { getAllProducts } from '../data/getProductsFirebase';

export const getFirebaseDataById =  ( id = "0ps1PuAotraKwvkepFTZ") => {

    const productList  = getAllProducts()
    return productList.find( item => item.id === id)

}   
