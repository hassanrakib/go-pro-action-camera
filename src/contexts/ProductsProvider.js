import React, { createContext } from 'react';
import useProductsFromDB from '../hooks/useProductsFromDB';


export const ProductsContext = createContext();

const ProductsProvider = ({children}) => {
    const products = useProductsFromDB();
    return (
        <ProductsContext.Provider value={products}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;