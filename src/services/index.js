import axios from "axios";

// products
const getProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = res.data

    return data
}