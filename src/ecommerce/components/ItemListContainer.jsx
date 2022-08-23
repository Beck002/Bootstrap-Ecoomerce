import { useState ,useEffect, useMemo } from 'react'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebaseConfig'

import { getCatalogoByGenero } from '../helpers/getCatalogoByGenero'
import { ItemList } from './itemList'
 
export const ItemListContainer = ({ genero }) => {


    const [listProducts, setListProducts] = useState([])

    const getProducts = async ()=>{
        const productCollection = collection( db, 'productos')
        const productSnapshot   = await getDocs(productCollection)
        const productList       = productSnapshot.docs.map((doc)=>{
            let product = doc.data()
            product.id  = doc.id
            return product;
        })
        setListProducts(productList)
    }
    
    console.log(listProducts);

    
    useEffect(() => {
        
        getProducts()
    
    }, [])
    
   
    const items  = useMemo(()=> getCatalogoByGenero(genero), [ genero ])

    return (
        <>
            <div className="row rows-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4  g-3 align-items-center">
                {
                    listProducts.map( item => (
                        <ItemList key={ item.id } { ...item }/>
                    ))
                }
            </div> 

        </>
    )
}
