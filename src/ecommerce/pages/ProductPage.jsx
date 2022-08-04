import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getCatalogoById } from '../helpers/getCatalogoById';


export const ProductPage = () => {
  
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    const item = useMemo( () => getCatalogoById( id ), [ id ]); 
  
    const onNavigateBack = () => {
      navigate(-1);
    }
  
  
    if ( !item ) {
      return <Navigate to="/" />
    }
    

    return (
        <div className="row mt-5">
      <div className="col-4">
        <img 
          src="https://static.dafiti.com.ar/p/vespertine-8092-370019-1-product.jpg"
          alt="img"
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8">
        <h3></h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Nombre Producto</b>  </li>
          <li className="list-group-item"> <b>Precio</b>  </li>
          <li className="list-group-item"> <b>Descripcion</b>  </li>
        </ul>

        <h5 className="mt-3"> Metodos de pago y mas </h5>
        <p>bla bl bla</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Comprar
        </button>


      </div>

    </div>
    )
}
