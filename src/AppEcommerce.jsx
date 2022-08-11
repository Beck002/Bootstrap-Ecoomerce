import { CartProvider } from "./ecommerce/context/cartContext"
import { RouterApp } from "./ecommerce/router/RouterApp"

export const AppEcommerce = () => {

    return (
        <CartProvider>
            <RouterApp/>
        </CartProvider>
    )
}
