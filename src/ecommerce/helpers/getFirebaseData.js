import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase/firebaseConfig';

export const getListProductsFirbaseByGenero = ( genero )=> {

    const [listProducts, setListProducts] = useState([]);

    const generosValidos = ["Hombre", "Mujer", "Kids"];

    if( !generosValidos.includes( genero )){
        throw new Error (`${ genero } es invalido`)
    }

    const getProducts = async ( )=>{
        const productCollection = collection( db, 'productos')
        const productSnapshot   = await getDocs(productCollection)
        const productList       = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id  = doc.id
            return product;
        })
        setListProducts(productList)
    }   
    
    
    useEffect(() => {
        
        getProducts()
        
    }, [])
    
    return listProducts.filter( item => item.genero === genero )
}

