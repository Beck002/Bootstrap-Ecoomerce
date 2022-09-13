import { getOrdenesFirebase } from "../data/getOrdenesFirebase"

export const TicketDeCompra = () => {
  
    
    const getTicket  = getOrdenesFirebase()

    const ticketFinal = getTicket[0]
    

    return (

        (ticketFinal !== undefined)
        ?
        <div style={{display: "grid", placeContent: "center"}} className="mt-3">
            <div className="card text-center">
                <div className="card-header">
                    <strong>Ticket De Compra</strong>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Por Favor Guarde Los Datos Del ticket</h5>
                    <p className="card-text">Nombre del Comprador: <strong>{ticketFinal.comprador.nombreCompleto}</strong></p>
                    <p className="card-text">Telefono del comprador: <strong>{ticketFinal.comprador.numeroCelular}</strong></p>
                    <p className="card-text">Mail del Comprador: <strong>{ticketFinal.comprador.email}</strong></p>
                    <p className="card-text">Cantidad de Productos: <strong>{ticketFinal.Pedido.length}</strong></p>
                    <p className="card-text">Total de la compra: <strong>${ticketFinal.totalAPagar}</strong></p>
                    <p className="card-text">Numero de Contacto: <strong> 11-3089-4808</strong></p>
                    <h3 className="card-title"><strong>codigo de compra: {ticketFinal.id}</strong></h3>
                </div>
        
            </div>
        </div>
        : null

    )
}
