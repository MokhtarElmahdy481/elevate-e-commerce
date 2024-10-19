import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ProductsPage from "../pages/products";
import ProductDetails from "../pages/productDetail";

const router = createBrowserRouter([
    {
        path: "",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <ProductsPage/>
            },
            {
                path: "products/:id",
                element: <ProductDetails/>
            }
        ]
    }
])
const RoutesProvider = ()=> {
    return <RouterProvider router={router} />
}
export default RoutesProvider