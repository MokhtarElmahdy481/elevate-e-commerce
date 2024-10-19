import { useEffect, useState } from "react";

// products
export const useGetProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
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

