import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const NavBar = () => {
    return (
        <>
            <header className="header">
                <Logo><Link to='/'> LOLA Cat Shop </Link></Logo>
                <menuItem><Link to='/category/2'> Accesorios </Link></menuItem>
                <menuItem><Link to='/category/1'> Camas </Link></menuItem>
                <menuItem><Link to='/category/3'> Alimentos </Link></menuItem>
                <BsBag />
                <menuitem><Cart /></menuitem>
            </header>
        </>

    )
}
export default NavBar