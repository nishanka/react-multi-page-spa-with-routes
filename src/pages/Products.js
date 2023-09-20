import { Link } from "react-router-dom";

const ProductsPage = () => {
    return (
        <>
            <h1>My Products Page</h1>
            <p>Go back to the <Link to="/">Home</Link>.</p>
        </>
    )
};

export default ProductsPage;