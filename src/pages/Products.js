import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: 'p1', title: 'Product 01' },
    { id: 'p2', title: 'Product 02' },
    { id: 'p3', title: 'Product 03' },
];

const ProductsPage = () => {
    return (
        <>
            <h1>My Products Page</h1>
            <ul>
                {PRODUCTS.map(prod => (
                    <li key={prod.id}>
                        <Link to={`/products/${prod.id}`}>{prod.title}</Link>
                    </li>
                ))}
            </ul>
            <p>Go back to the <Link to="/">Home</Link>.</p>
        </>
    )
};

export default ProductsPage;