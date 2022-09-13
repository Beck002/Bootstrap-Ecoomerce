import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getFirebaseDataById } from '../helpersfirebase/getFirebaseDataById';
import { ItemDetail } from './ItemDetail';


export const ItemDetailContainer = () => {


  const  { id } = useParams();
  const navigate = useNavigate();

  const item =  getFirebaseDataById(id)


  const onNavigateBack = () => {
    navigate(-1);
  }

      
  return (
  <>
    {(item !== undefined) ? <ItemDetail onNavigateBack={ onNavigateBack } item={ item }/> : null}
  </>
  )
}
