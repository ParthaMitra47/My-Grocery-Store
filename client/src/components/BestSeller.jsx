import React from 'react'
import { dummyProducts } from '../assets/assets'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSeller = () => {
  const { products } = useAppContext();

  {/* //Experiment */}
  // const customProduct = products.filter((product) => product.inStock).slice(0, 5);

  // const customMappedProducts = customProduct.map((product, index) => (

  //   <ProductCard key={index} product={product} />
  // ))

  return (
    <div className='mt-16'>
      <p className='text -2xl md:text-3xl font-medium' onClick={() => console.log('hi')}>Best Sellers</p>
      {/* <div className='flex overflow-auto gap-2 mt-6'> */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
        {products.filter((product)=> product.inStock).slice(0,5).map((product, index)=>(
            <ProductCard key={index} product={product}/>
          ))}

        {/* Experiment */}
        {/* {customProduct.map((product, index) => (

          <ProductCard key={index} product={product} />
        ))} */}

        {/* //Experiment */}
        {/* {console.log(customProduct)}
        {console.log(customMappedProducts)} */}

        {/* //Experiment */}
        {/* {products && products.length > 0 ? (
          <ProductCard product={products[0]} />
        ) : (
          <p className="text-gray-500">Loading products...</p>
        )} */}
      </div>
    </div>
  )
}

export default BestSeller