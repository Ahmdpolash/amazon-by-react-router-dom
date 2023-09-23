import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const {products} = useLoaderData()
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-11 container mx-auto'>
           {
            products.map(product => <Product key={product.id} product={product}></Product> )
           }
        </div>
    );
};

export default Products;