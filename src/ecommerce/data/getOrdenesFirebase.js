import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../firebase/firebaseConfig"

export const getOrdenesFirebase = () => {

    const [ordenesDeCompra, setOrdenesDeCompra] = useState([])
    const [ticketDelCliente, setTicketDelCliente] = useState({})
    const getOrdenes  = async () => {

        const ordernesCollection = collection( db, 'ordenes')
        const ordenesSnapshot    = await getDocs(ordernesCollection)
        if (!ordenesSnapshot) return ; 
        const ordenes = ordenesSnapshot.docs.map((doc)=>{
            let orden = doc.data()
            orden.id = doc.id
            return orden;
        })
        setOrdenesDeCompra(ordenes)
        setTicketDelCliente([ordenes[ ordenes.length - 1 ]])
    } 

    useEffect(() => {
        
        getOrdenes()
    
    }, [])

    return ordenesDeCompra;

}
