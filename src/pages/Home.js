import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <h1>My Home Page</h1>
            <p>Go to the <Link to="products">list of products</Link>.</p>
        </>
    )};

export default HomePage;