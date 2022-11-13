import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';

const NavBar = () => {
    return <nav class="navbar navbar-expand-lg bg-pink container">

        <div className="container">
            <Link> LOLA Cat Shop </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
                <ul className="navbar-nav d-flex justify-content-between w-75">
                    <li>
                        <ul className="dropdown-menu">
                            <Link to="/category/2">Accesorios</Link>
                            <Link to="/category/1">Accesorios</Link>
                            <Link to="/category/3">Accesorios</Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <CartWidget />
    </nav>
}

export default NavBar;