import useProducts from '../../../hooks/useProducts';
import Product from '../../SharedComponents/Product/Product';

const ThreeProducts = () => {
    const {products} = useProducts();
    const threeProducts = products?.slice(0, 6); 
    return (
        <div className='my-10'>
            <h2 className='text-4xl text-center mb-8'>Featured Products</h2>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {
                    threeProducts?.map(product =>
                        <Product key={product?.id} product={product}></Product>
                    )
                }
            </div>
        </div>
    );
};

export default ThreeProducts;