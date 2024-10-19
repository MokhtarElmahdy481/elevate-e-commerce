import Product from "."

const ProductList = ({ products = [] }) => {
    return (
        <div className="flex justify-center flex-wrap gap-4">
            {products.map(product => <Product key={product.id} {...product} />)}
        </div>
    )
}

export default ProductList