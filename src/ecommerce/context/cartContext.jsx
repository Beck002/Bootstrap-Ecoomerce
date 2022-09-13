import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartProducts, setCartProducts] = useState([])
  const [totalAPagar, setTotalAPagar ] = useState(0)

  

  const addProductToCart = ( product )=>{
    let isInCart = cartProducts.find( cartItem => cartItem.id === product.id)
    if(!isInCart){
      setTotalAPagar(totalAPagar + (product.precio * product.cantidad))
      return setCartProducts( cartProducts => [...cartProducts, product])
    }
  }


  const deleteProduct = ( product )=>{
    setCartProducts( cartProducts.filter( cartProduct => cartProduct.id !== product.id ))
    setTotalAPagar(totalAPagar - (product.precio * product.cantidad))

  }
  const clearCart = ()=>{
    setCartProducts([])
  } 

  const data = {
    cartProducts,
    setCartProducts,
    addProductToCart,
    deleteProduct,
    clearCart,
    totalAPagar
  }

  return(
    <CartContext.Provider value={ data }>
      { children }
    </CartContext.Provider>
  )


}
