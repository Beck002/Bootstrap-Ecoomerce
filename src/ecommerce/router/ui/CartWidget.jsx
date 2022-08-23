import { Button, Modal, Typography, Box, CardContent, Card, CardActions, CardMedia, Link, List, ListItem, ListSubheader, ListItemText   } from "@mui/material"
import { useContext, useState } from "react"
import { AiOutlineShoppingCart, AiFillDelete } from "react-icons/ai"
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext"



const style = {
    position: 'absolute',
    top: '30%',
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
    
    <Button onClick={handleOpen}><AiOutlineShoppingCart style={{ fontSize: "1.2rem"}}/></Button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
     
        <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Productos del Carro: 
            </Typography>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                <ul>
                    {
                        cartProducts.map((product) => (
                            <li key={product.id}>
                                <ListItem>
                                    <Card sx={{ maxWidth: 345, display: "flex", flexDirection: "colmun", marginBottom: "1rem"}} key={product.id}>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            width="100"
                                            image={product.imagenURL}
                                            alt={product.nombre}
                                        />
                                        <Box sx={{display: "flex", flexDirection: "column"}}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                {product.nombre}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                ${product.precio} 
                                                </Typography>
                                                
                                            </CardContent>
                                            <CardActions sx={{display: "flex"}}>
                                                <Button sx={{color: "red"}} onClick={()=>deleteProduct(product)}><AiFillDelete style={{fontSize: "1.5rem"}}/></Button>
                                            </CardActions>
                                        </Box>
                                    
                                    </Card>
                                </ListItem>
                                
                            </li>
                        ))
                    }
                </ul>
                <Button size="small"><Link to="/cart" component={RouterLink}  onClick={handleClose} underline="none">Ver Todo</Link></Button>
            </List>
       
   
        </Box>
    </Modal>
    <p style={{color: "white"}}>{cartProducts.length}</p>
    </>
    )
}
