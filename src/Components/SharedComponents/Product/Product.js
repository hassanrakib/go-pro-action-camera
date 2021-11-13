import React from 'react';
import { useHistory } from 'react-router';

const Product = ({ product }) => {
    const {name, image, price, description, id} = product;
    const history = useHistory();
    return (
        <div className="shadow-lg hover:shadow-2xl max-w-xs m-auto text-center">
            <img src={image} alt="" className='w-full p-4' />
            <h1 className='text-2xl mb-3'>{name}</h1>
            <p className="text-gray-700 text-xl mb-3">${price}</p>
            <p className='mb-3'>{description.slice(0, 100)}</p>
            <p><button onClick={() => history.push(`/purchase/${id}`)} className='border-0 outline-none p-3 text-white bg-black text-center cursor-pointer w-full text-lg hover:opacity-70'>Add to Cart</button></p>
        </div>
    );
};

export default Product;