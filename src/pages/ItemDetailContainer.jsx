import { useEffect, useState } from 'react';
import { useParams, redirect } from 'react-router-dom';
import { getProduct } from '../utils/products';
//import ItemCount from '../components/ItemCount';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { productId } = useParams();

    useEffect(() => {
        getProduct(productId).then((data) => setProduct(data))
    }, [productId])

    return (
        <div class="card" style="width: 20rem;">
            <img src={product.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text">Stock: {product.stock}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.description}</li>
                <li className="list-group-item">${product.price}</li>
            </ul>
        </div>
    )
}
