import ProductList from "../../components/product/productList"
import { useGetProducts } from "../../hooks"

const ProductsPage = () => {
    const {
        products,
        loading,
        error,
    } = useGetProducts()
  return (
    <div className="container">
        <ProductList products={products} />
    </div>
  )
}

export default ProductsPage