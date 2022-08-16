import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import {  AiFillDelete } from "react-icons/ai"



export const CartPage = () => {

  const {cartProducts, deleteProduct} = useContext(CartContext);

  return (
        
    <div className='row'>
      {
        cartProducts.map( product =>(
          <div className="card mb-3 col" style={{maxWidth: "540px"}} key={product.id}>

            <div className="row g-0" key={product.id}>
              <div className="col-md-4">
                <img src={product.imagenURL} className="img-fluid rounded-start" alt={product.name}/>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.descripcion}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <button className='btn btn-outline-danger' onClick={()=>deleteProduct(product)}><AiFillDelete style={{fontSize: "1.5rem"}}/></button>

              </div>
            </div>
         </div>  

        ))
      }
    </div>
      
     
    
  )
}
