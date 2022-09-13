#  __Proyecto Hoteles Agenda__
## Para CoderHouse 
### By *Guillermo Fernandez*

__<details><summary>Enfoque/Idea</summary>__

<p>

El Proyecto se enfoca en un e-commerce de multiples productos, se podran usar filtros para encontrar productos que sean los deseados, también sera responsive. 

Los filtros se aplican a las paginas "hombres", "mujeres" y "kids", también cuenta con un buscador para filtrar por  nombre de 
articulos.

Una vez realizada la compra se se ve en el carro, en el modal se puede ver 


</p>

</details>

__<details><summary>Funcionamiento</summary>__

La aplicación se compone de 6 páginas accesibles para el comprador, y una a la cual no se puede acceder 
hasta completar el formulario de compra.

Páginas: 

- HombresPage
- MujeresPage
- KidsPage
- HomePage
- CartPage
- SearchPage
## Detalles de componentes

**ItemList:** 
contiene la informacion que es mapeada por el ItemListContainer 
**ItemListContainer:** 
Se utiliza para mapear la inforacion de que proviene desde el backend de firestore.
**ItemDetail:** 
Es el html de todo los detalles de la pagina del producto 
**ItemDetailContainer:** 
En base al producto seleccionado usando un filtro por id genera una pagina que contiene el ItemDetail y le pasa el objeto que contiene el producto.
**ItemCounter:** 
contiene los botones para sumar y restar la cantidad del carrito.
**Formulario:** 
es el formulario que se muestra en caso de que existan items en el carro para asi poder concretar la compra. 
cuando este hace el submit y todos los datos son correctos lo manda a la pagina que muestra el ticket

## Detalles de Hombre - Mujer - Kids Pages

Estan compuestos por el componente ItemListContainer que recibe un argumento que seria el "genero" para poder filtrar los productos. 

**caso HomePage**: directamente hace el map de toda la informacion que proviene de la base de datos

## Detalles de TicketDeCompra Page

renderiza el ticket de compra del usuario en caso de que haya cumplido con los requisitos del formulario.
# In Progress 
![Esta es una imagen](https://pbs.twimg.com/media/Et96SJ8WgA8-t2A?format=jpg&name=large)

</details>

__<details><summary>Hooks - HelpersFirebase - data</summary>__

## Data 
en la carpeta data contiene dos archivos js que se engargan de traer las ordenes de Firebase del cliente y Los productos para poder mapearlos en los correspondientes contenedores y paginas.

## HelpersFirebase 
contiene 3 archivos js que se encargan de traer la data por genero, id o nombre del producto.

## Hooks
contiene unicamente un archivo js que es un hook personalizado para poder crear formularios de forma dinamica.

__<details><summary>CartContext</summary>__

contiene las funcionalidades de añadir items al carro, borrarlos, hacer un reset del carro, el precio total de items que se encuentran en el carro.

__<details><summary>Router y Firebase</summary>__

la carpeta router contiene la barra de navegacion y el componente del cartWidget que se renderiza en el navbar.
La carpeta firebase contiene unicamente la informacion de la base de datos para poder conectar con ella.

