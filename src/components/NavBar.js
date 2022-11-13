import { BsBag } from "react-icons/bs";

const NavBar = () => {
    return (
        <>
        <header className="header">
        <p className="Logo"> LOLA Cat Shop</p>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#">Accesorios</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Camas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Alimento</a>
                </li>
            </ul>
            <BsBag/>
            </header>
        </>
        
    )
}
export default NavBar;