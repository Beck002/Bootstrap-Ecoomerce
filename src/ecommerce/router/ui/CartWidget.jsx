import { Button, Modal, Typography, Box } from "@mui/material"
import { useContext, useState } from "react"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../context/cartContext"



const style = {
    position: 'absolute',
    top: '20%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const CartWidget = () => {


    const { cartProducts, deleteProduct, clearCart, totalProducts} = useContext(CartContext)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    
    <>
    
    <Button onClick={handleOpen}><AiOutlineShoppingCart/></Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Productos del Carro: 
            </Typography>

            <h1>hola</h1>

        </Box>
    </Modal>
    </>
    )
}
