import { Link } from 'react-router-dom';

const CartWidget = () => {
    return <div className='CartWidget'>
        <Link to={'/carrito'}>
            <a className='carrito'>🛒</a>
        </Link>
    </div>
}

export default CartWidget;