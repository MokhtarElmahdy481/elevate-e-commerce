import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { Link } from 'react-router-dom'

// Display the following information for each product:
// ◦ Product Image
// ◦ Title
// ◦ Price
// ◦ Rating




const Product = ({ category = "", description = "", id, image = "", price = 0, rating = {}, title = "" }) => {
    return (
        <div className="shadow-xl w-72 rounded-md overflow-hidden bg-zinc-50">
            <img src={image} alt={title} className="w-full h-56 object-contain bg-white " />
            <div className="px-2 py-4">
                <h5 className='text-gray-500 uppercase'>
                    {category}
                </h5>
                <div className="flex justify-between items-center gap-4 mb-2">
                    <h2 className="text-lg font-semibold line-clamp-1">{title}</h2>
                    <p className="bg-blue-600 text-white px-1 rounded-md">${price}</p>

                </div>
                <div className="h-20 overflow-hidden mb-2">
                    <p className='line-clamp-3 text-gray-900'>
                        {description}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-xl mb-3">
                    <Rater total={5} rating={rating.rate} interactive={false} />
                    <span className='text-sm font-semibold'>
                        ({rating.count})
                    </span>
                </div>
                <div className="">
                    <Link to={`/products/${id}`} className="w-full inline-block text-center bg-slate-900 hover:bg-slate-900/95 text-white px-4 py-2 rounded-md ">
                        More Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product