import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import {  AiFillDelete } from "react-icons/ai"
import { useForm } from '../hooks/useForm';



export const CartPage = () => {

  const { cartProducts, deleteProduct } = useContext( CartContext );



  return (
    <>
    
      <div className="row rows-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4  g-3 align-items-center m-2">
        {
          cartProducts.map( product =>(

            <div className="card m-2">
              <img className="card-img-top" src={product.imagenURL} alt={product.nombre}/>
              <div className="card-body">
                <h5 className="card-title">{ product.nombre }</h5>
                <p className="card-text"></p>
                <p className="card-text">Precio: ${product.precio} | Cantidad: {product.counter}</p>
                <p className="card-text">Total: ${product.precio * product.counter } </p>
                <button className='btn btn-outline-danger' onClick={()=>deleteProduct(product)}><AiFillDelete style={{fontSize: "1.5rem"}}/></button>
              </div>
            </div>
            

          ))
        }

      </div>

      <p>Cantiadad de Productos: {cartProducts.length} | Total: {}</p>

    
     

    </>

      
     
    
  )
}
