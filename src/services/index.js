import axios from "axios";

// products
export const getProducts = async () => {
    
    const res = await axios.get('https://fakestoreapi.com/products');
    const data = res.data

    return data
}
// product
export const getProduct = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    const data = res.data
    return data
}