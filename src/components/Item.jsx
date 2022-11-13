import { Link } from 'react-router-dom';

const Item = (props) => {
    const link = Link()
    return <div className="m-2">
        <div className="card" onClick={() => link(`/product/${props.id}`)}>
            <img src={props.image} alt="image" className="card-img-top" />
            <div className="card-body d-flex justify-content-between">
                <span>{props.title}</span>
                <span>${props.price}</span>
                <button className="btn btn-dark ">Agregar al carrito</button>
            </div>
        </div>
    </div>
}

export default Item;
