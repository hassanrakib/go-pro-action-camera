import React, { useEffect, useState } from 'react';
import Table from '../../SharedComponents/Table/Table';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [productIds, setProductIds] = useState([]);
    const [poke, setPoke] = useState(false);


    useEffect(() => {
        fetch("https://glacial-headland-75671.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [poke]);

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
                    let orderStatus = {};
                    orders?.forEach(order => {
                        if (order.productId === product?.id) {
                            orderStatus["status"] = order.status;
                        }
                    })
                    productIds.forEach(productId => {
                        if (productId === product?.id) {
                            quantity += 1;
                        }
                    });
                    const productWithQuantity = { ...product, quantity, ...orderStatus };
                    productsWithQuantity.push(productWithQuantity);
                });
                setProducts(productsWithQuantity);
            });
    }, [productIds, orders]);

    const handleButton = (productId) => {
        const confirm = window.confirm('Are you sure?');
        if (confirm) {
            fetch(`https://glacial-headland-75671.herokuapp.com/orders?id=${productId}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        setPoke(!poke);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='text-4xl mb-3'>Manage All Orders</h1>
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
                                            Shipping Status
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Confirm Shipping
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
                                            cell3={product?.status}
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

export default ManageAllOrders;