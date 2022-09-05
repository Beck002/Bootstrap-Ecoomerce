import { useLocation, useNavigate } from "react-router-dom"
import queryString from 'query-string'

import { getFirebaseDataByNombre } from "../helpersfirebase/getFirebaseDataByNombre";
import { useForm } from "../hooks/useForm";
import { ItemList } from "../components";


export const SearchPage = () => {


  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search )
  const productos = getFirebaseDataByNombre( q )

  const showSearch = ( q.length === 0 );
  const showError  = ( q.length > 0 ) && productos.length === 0; 

  const { searchText, onInputChange} = useForm({
    searchText: q
  })
  const onSearchSubmit = (event) =>{
    event.preventDefault()
    navigate(`?q=${ searchText }`)
  }

  
  return (

    <>

      <div className="row g-3 align-items-center m-1 ">
        <form 
          className="col-auto" 
          onSubmit={ onSearchSubmit } 
          style={{
            display: "flex", 
            gap: "20px", 
            alignItems: "center", 
            justifyContent:"center", 
          }}
        >
          <div className="col-auto">
            <h3>Buscar</h3>
          </div>
            <input 
              type="text" 
              name="searchText" 
              value={ searchText } 
              onChange={ onInputChange } 
              className="form-control" 
            />

            <button className="btn btn-outline-primary mt-1" type="submit" >
              Buscar
            </button>
        </form>

      </div>

      <div className="alert alert-primary animate__animated animate__fadeIn m-1" 
          style={{ display: showSearch ? '' : 'none' }}>
        Buscar Articulo
      </div>

      <div 
          className="alert alert-danger animate__animated animate__fadeIn m-1" 
          style={{ display: showError ? '' : 'none' }}
        >
        no se encuentra el articulo: <b>{ q }</b>
      </div>

      <div 
        className="row rows-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3 align-items-center mt-2"
      >
        {
          productos.map( item => (
            <ItemList key={ item.id } item={ item }/>
          ))
        }
      </div> 


    </>

  )



}
