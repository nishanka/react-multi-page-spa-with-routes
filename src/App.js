import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// Creating Routes
const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> },
    ]
  },
 /* {
    path: '/admin',
    element: <x />,
    children: [
      { path: '/zzz', element: <z />},
      { path: '/yyy', element: <y />},
    ]
  } */
]);

function App() {
  // Tell React about the routes it needs to use
  return <RouterProvider router={myRouter} />;
}

export default App;
