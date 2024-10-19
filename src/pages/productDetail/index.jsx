import { useParams } from "react-router-dom";
import { useGetProduct } from "../../hooks";
import Rater from "react-rater";

const ProductDetails = () => {
  const { id } = useParams()
  const {
    product,
    loading,
    error,
  } = useGetProduct(id);
  console.log(product);

  return (
    <div className="container">

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="w-full sm:w-1/4 md:w-1/3">
              <img src={product.image} alt={product.title} className="shadow" />
            </div>
            <div className="w-full md:w-2/3">

              <h1 className="text-4xl">{product.title}</h1>
              <h3 className="text-xl uppercase">{product.category}</h3>
              <p>{product.description}</p>
                <div className="text-4xl text-slate-900 font-medium">${product.price}</div>
              <div className="flex ">
                <div className="flex flex-col gap-2 text-4xl">
                    <Rater total={5} rating={product.rating?.rate} interactive={false} />
                    <span className='text-xl font-semibold'>
                        ({product.rating?.count}) Reviews
                    </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails