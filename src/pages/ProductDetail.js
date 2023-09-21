import { Link, useParams } from "react-router-dom";;

const ProductDetailPage = () => {
    const params = useParams();

  return (
    <>
        <h1>Product Details page</h1>
        <p>{params.productId}</p>
        <p>Go back to the <Link to="/products">Products</Link>.</p>
    </>
  )
}

export default ProductDetailPage;