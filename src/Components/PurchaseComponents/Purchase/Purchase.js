import React, { useEffect, useRef, useState } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();

    useEffect(() => {
        fetch(`https://glacial-headland-75671.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(product => setProduct(product));
    }, [id]);

    const purchaseFormSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const newOrder = {
            name, email, phone, address, productId: product?.id, status: 'pending'
        }
        fetch('https://glacial-headland-75671.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Order has been placed!");
                    e.target.reset();
                }
            })
    }

    return (
        <div className='mt-10 container mx-auto p-4'>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
                <div>
                    <h1 className='text-4xl'>{product?.name}</h1>
                    <div>
                        <Rating
                            initialRating={product?.rating}
                            emptySymbol="far fa-star text-yellow-400"
                            fullSymbol="fas fa-star text-yellow-400"
                            readonly
                        />
                    </div>
                    <div className='max-w-xs'>
                        <img className='w-full' src={product?.image} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl font-medium my-4'>Key Features:</h3>
                        <ul className='list-disc sm:list-inside pl-3 sm:pl-0'>
                            {
                                product?.features?.map((feature, index) => <li key={index} className='mb-2 text-lg'>{feature}</li>)
                            }
                        </ul>
                    </div>
                    <div className='mt-3'>
                        <h3 className='text-2xl font-medium mb-4'>Description</h3>
                        <p className='font-light'>{product?.description}</p>
                    </div>
                </div>
                <div>
                    <h3 className='font-medium text-xl mb-3'>In Stock</h3>
                    <h2 className='font-medium text-3xl'>${product?.price}</h2>


                    {/* order taking form */}
                    <form onSubmit={purchaseFormSubmit}>
                        <div className="p-2 bg-white">
                            <h1 className='text-4xl mb-3 font-medium'>Order</h1>
                            <p>Please fill in this form to order {product?.name}</p>
                            <hr className='mb-8' />

                            <label><b>Name</b></label>
                            <input ref={nameRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Name" defaultValue={user?.displayName} required />

                            <label><b>Email</b></label>
                            <input ref={emailRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="email" placeholder="Enter Email" defaultValue={user?.email} disabled />

                            <label><b>Phone</b></label>
                            <input ref={phoneRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Phone Number" required />

                            <label><b>Address</b></label>
                            <textarea ref={addressRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' style={{ height: "120px" }} type="text" placeholder="Enter Address" required />

                            <button type="submit" className="bg-gray-800 text-white py-4 px-5 my-3 border-0 cursor-pointer w-full opacity-90 hover:opacity-100">Confirm</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;