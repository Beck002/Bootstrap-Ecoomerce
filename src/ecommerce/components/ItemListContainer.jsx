import React, { useMemo } from 'react'
import { getCatalogoByGenero } from '../helpers/getCatalogoByGenero'
import { ItemList } from './itemList'

export const ItemListContainer = ({ genero }) => {
   
   
    const items  = useMemo(()=> getCatalogoByGenero(genero), [ genero ])

    return (
        <>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {
                    items.map( item => (
                        <ItemList 
                            key={ item.id } 
                            { ...item }
                        />
                    ))
                }
            </div> 

        </>
    )
}
