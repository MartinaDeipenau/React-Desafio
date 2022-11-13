import Item from './Item';
import { getProducts } from '../utils/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { CategoryId } = useParams();

    console.log(CategoryId);

    useEffect(() => {
        setProducts([])
        getProducts(CategoryId)
            .then(result => setProducts(result))
            .catch(error => console.log(error))
    }, [CategoryId])

    return (
        <div className="products container d-flex flex-wrap justify-content-center">
            {products.map((producto) => {
                return (
                    <Item
                        key={producto.id}
                        image={producto.imagen}
                        title={producto.titulo}
                        price={producto.precio}
                        categoryId={producto.categoria}
                        stock={producto.stock}
                        description={producto.descripcion}
                    />
                );
            })}
        </div>
    );
}

export default ItemListContainer;

