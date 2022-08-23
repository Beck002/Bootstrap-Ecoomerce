import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartWidget } from './CartWidget';

export const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Home
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/hombre"
                    >
                        Hombre
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/mujer"
                    >
                        Mujer
                    </NavLink>
                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/kids"
                    >
                        Kids
                    </NavLink>

                    
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                        to="/search"
                    >
                        Search
                    </NavLink>

                    <CartWidget/>
                </div>
            </div>
        </nav>
    )
}
