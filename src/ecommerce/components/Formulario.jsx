import { useContext } from "react"
import { CartContext } from "../context/cartContext"
import { db } from "../../firebase/firebaseConfig"
import { useForm } from "../hooks/useForm"
import { addDoc, collection } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

export const Formulario = () => {

    const { cartProducts, totalDelCarro, totalAPagar } = useContext( CartContext );

    const navigate = useNavigate()

    const dateObj = new Date();
    const mes = dateObj.getUTCMonth() + 1; 
    const dia = dateObj.getUTCDate();
    const año = dateObj.getUTCFullYear();
    const fechaDeCompra = `${dia}/${mes}/${año}`;

    const {nombreCompleto, email, numeroCelular, onInputChange, formState } = useForm({
        nombreCompleto: "Barry Allen",
        email: 'barry@hotmail.com',
        numeroCelular: '1162684987'
    })


    const onSubmit = ( event ) =>{
        event.preventDefault()
        if( email  === " " || !email.includes("hotmail" || "outlook" || "gmail" )) return;
        if( nombreCompleto === " " || nombreCompleto.length < 4 ) return;
        if( numeroCelular.length < 9 && numeroCelular.length > 8) return;
        if( totalDelCarro === 0 || cartProducts.length === 0) return;
        generarOrden({
            comprador: formState, 
            Pedido: cartProducts, 
            totalAPagar,
            fechaDeCompra
        })

        navigate("/ticket")              
    }

    const generarOrden = async ( nuevaOrden )=>{
        const collectionOrder = collection( db, 'ordenes')
        const orderDoc = await addDoc( collectionOrder, nuevaOrden)
    }



    return (
        
        <form onSubmit={ onSubmit } className="m-3">
            <div className="mb-3">
                <label className="form-label">Nombre Completo</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Stephen Curry"
                    name="nombreCompleto"
                    value={nombreCompleto}
                    onChange={ onInputChange }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input 
                    type="email"
                    className="form-control"
                    placeholder="google@google.com"
                    name="email"
                    value={email}
                    onChange={ onInputChange }
                />
            </div>
            <div className="mb-3">
                <label  className="form-label">Numero de Teléfono</label>
                <input 
                
                    type="number" 
                    className="form-control "
                    placeholder="1162684987" 
                    name="numeroCelular"
                    value={numeroCelular}
                    onChange={ onInputChange }
                />
            </div>
            <button type="submit" className="btn btn-primary">Terminar Compra</button>
        </form>
        
    )
}
