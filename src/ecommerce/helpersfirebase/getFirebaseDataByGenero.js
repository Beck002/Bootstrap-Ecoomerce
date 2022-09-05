import { useState } from 'react';
import { getAllProducts } from '../data/getProductsFirebase';

export const getFirebaseDataByGenero = ( genero ) => {


    const generosPermitidos = ["Hombre", "Mujer", "Kids"]

    if (!generosPermitidos.includes( genero )) {
        throw new Error(`${genero} invalido`)
    }

    const  productList  = getAllProducts();

    return productList.filter( item => item.genero === genero )

    
}   
