import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '../../SharedComponents/Table/Table';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [productIds, setProductIds] = useState([]);
    const [deleted, setDeleted] = useState(false);

    useEffect(() => {
        fetch(`https://glacial-headland-75671.herokuapp.com/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(orders => setOrders(orders));
    }, [user, deleted]);

    // get products by their ids
    useEffect(() => {
        setProductIds(orders?.map(order => order?.productId))
    }, [orders]);

    useEffect(() => {
        fetch(`https://glacial-headland-75671.herokuapp.com/products/ordered`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productIds)
        })
            .then(res => res.json())
            .then(products => {
                let productsWithQuantity = [];
                products.forEach(product => {
                    let quantity = 0;
                    productIds.forEach(productId => {
                        if (productId === product?.id) {
                            quantity += 1;
                        }
                    });
                    const productWithQuantity = { ...product, quantity };
                    productsWithQuantity.push(productWithQuantity);
                });
                setProducts(productsWithQuantity);
            });
    }, [productIds]);


    // handle Button

    const handleButton = (productId) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`https://glacial-headland-75671.herokuapp.com/orders?id=${productId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setDeleted(!deleted);
                    }
                })
        }
    }


    return (
        <div>
            <h1 className='text-4xl mb-3'>My Orders</h1>
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
                                            Quantity
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Cancel Order
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
                                            cell3={product?.quantity}
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

export default MyOrders;