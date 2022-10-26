import { BsBag } from "react-icons/bs"
const Header = () => {
    return (
        <>
        <header className="header">
        <p className="Logo"> Tienda Online</p>
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" href="#">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Productos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Novedades</a>
                </li>
            </ul>
            <BsBag/>
            </header>
        </>
        
    )
}
export default Header