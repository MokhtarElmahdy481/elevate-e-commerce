import { useEffect, useState } from 'react'
import ProductList from "./components/product/productList"
import { useGetProducts } from './hooks';

function App() {
  const {
    products,
    loading,
    error,
} = useGetProducts()
  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(data=>setData(data))
  //   .catch(error => {
  //     console.log(error);
      
  //   })
  // },[])

  // useEffect(()=>{
  //   fetch('https://fakestoreapi.com/products')
  //   .then(res=>res.json())
  //   .then(data=>setData(data))
  //   .catch(error => {
  //     console.log(error);
      
  //   })
  // },[])
  console.log("data",products);
  
  return (
    <div className='container'>
      {/* <div className=""> */}

      <ProductList products={products} />
      {/* </div> */}
        
    </div>
  )
}

export default App
