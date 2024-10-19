import { useEffect, useState } from "react";
import { getProduct, getProducts } from "../services";

// products
export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await getProducts()
                setProducts(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
        return () => {
            // Clean up
        };
    }, []);
    return {
        products,
        loading,
        error,
    }
}
export const useGetProduct = (id) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const data = await getProduct(id)
                setProduct(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
        return () => {
            // Clean up
        };
    }, []);
    return {
        product,
        loading,
        error,
    }
}

