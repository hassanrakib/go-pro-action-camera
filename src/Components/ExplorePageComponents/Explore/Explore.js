import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../SharedComponents/Product/Product';

const Explore = () => {
    const { products } = useProducts();
    return (
        <div className='mt-10'>
            <h2 className='text-4xl text-center mb-10'>Explore All Products</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    products?.map(product =>
                        <Product key={product?.id} product={product}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default Explore;