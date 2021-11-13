import { useState } from 'react';
import useProductsFromDB from '../../../hooks/useProductsFromDB';
import Table from '../../SharedComponents/Table/Table';

const ManageProducts = () => {

    const [poke, setPoke] = useState(false);
    const {products} = useProductsFromDB(poke);


    const handleButton = (productId) => {
        const confirm = window.confirm("Are you sure?");
        if (confirm) {
            fetch(`https://glacial-headland-75671.herokuapp.com/products/${productId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Product has been deleted!");
                        setPoke(!poke);
                    }
                })
        }
    }
    return (
        <div>
            <h1 className='text-4xl mb-3'>Manage Products</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Product
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Product Id
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Delete Product
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        products?.map(product => <Table
                                            key={product?.id}
                                            image={product?.image}
                                            name={product?.name}
                                            color={product?.color}
                                            id={product?.id}
                                            cell3={`$${product?.price}`}
                                            handleButton={handleButton}
                                        ></Table>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;