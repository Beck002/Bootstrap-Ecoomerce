import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getCatalogoById } from '../helpers/getCatalogoById';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {


    const  { id } = useParams();
    const navigate = useNavigate();

    const producto = getCatalogoById( JSON.parse( id ) )


    const onNavigateBack = () => {
      navigate(-1);
    }

    if ( !producto) {
        return <Navigate to="/" />
    }
        
    return (
        <ItemDetail onNavigateBack={ onNavigateBack } {...producto}/>
    )
}
