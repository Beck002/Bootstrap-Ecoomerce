import { createContext, useState } from 'react'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartProducts, setCartProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0)
  const [quantitySelected, setQuantitySelected] = useState(0)


  const addProductToCart = ( product )=>{
    let isInCart = cartProducts.find( cartItem => cartItem.id === product.id)
    if(!isInCart){
      setTotalProducts( totalProducts + 1)
      return setCartProducts( cartProducts => [...cartProducts, product])
    }
  }

  const deleteProduct = ( product )=>{
    setCartProducts( cartProducts.filter( cartProduct => cartProduct.id !== product.id ))
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
    totalProducts,
    setQuantitySelected,
    quantitySelected
  }

  return(
    <CartContext.Provider value={ data }>
      { children }
    </CartContext.Provider>
  )


}
