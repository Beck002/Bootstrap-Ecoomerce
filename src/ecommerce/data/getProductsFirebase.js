import { collection, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../firebase/firebaseConfig';


export const getAllProducts = () =>{

    const [productsList, setProductsList] = useState([])

    const getProductsFirebase = async ()=>{
    

        const productCollection = collection( db, 'productos')
        const productSnapshot   = await getDocs(productCollection)
        const products          = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id  = doc.id
            return product; 
        })
        
        setProductsList(products)
            
    }

    useEffect(() => {
        getProductsFirebase()
    }, [])
    
    
    return productsList;

}






