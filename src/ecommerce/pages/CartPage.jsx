import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import {  AiFillDelete } from "react-icons/ai"
import { Formulario } from '../components/Formulario';



export const CartPage = () => {

  const { cartProducts, deleteProduct, totalAPagar } = useContext( CartContext );

  const [compraFinalizada, setCompraFinalizada] = useState(false)



  return (
    <>

      { (cartProducts.length === 0 && !compraFinalizada ) 
      ? 
        <div style={{display: "flex", alignItems: "center", justifyContent:"center"}}>
          <div style={{height: "300px", width: "300px", backgroundImage:"url(https://www.imichile.cl/wp-content/uploads/2021/02/carro-vacio.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", flexDirection:"column"}}> <h3>No Hay Items en tu Carro</h3></div> 
        </div>
       
      :  
        <>
        <div className="row rows-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-4  g-3 align-items-center m-2">
          {
            cartProducts.map( product =>(

              <div className="card m-2" key={product.id}>
                <img className="card-img-top" src={product.imagenURL} alt={product.nombre}/>
                <div className="card-body">
                  <h5 className="card-title">{ product.nombre }</h5>
                  <p className="card-text"></p>
                  <p className="card-text">Precio: ${product.precio} | Cantidad: {product.cantidad}</p>
                  <p className="card-text">Total: ${product.precio * product.cantidad } </p>
                  <button className='btn btn-outline-danger' onClick={()=>deleteProduct(product)}><AiFillDelete style={{fontSize: "1.5rem"}}/></button>
                </div>
              </div>
              

              ))
            }

          </div>
          <div className='m-3'> 

            <p>total del Carro: <strong>${totalAPagar}</strong> | Productos: <strong>{cartProducts.length}</strong> </p>
          </div>
            
          <Formulario setCompraFinalizada={setCompraFinalizada}/>
        </>
      }
      
   
    </>

      
     
    
  )
}
