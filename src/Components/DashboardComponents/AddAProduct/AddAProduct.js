import React, { useRef } from 'react';

const AddAProduct = () => {
    const nameRef = useRef();
    const idRef = useRef();
    const urlRef = useRef();
    const colorRef = useRef();
    const priceRef = useRef();
    const ratingRef = useRef();
    const featuresRef = useRef();
    const descriptionRef = useRef();

    const addAProductFormSubmit = e => {
        e.preventDefault();
        const id = idRef.current.value;
        const name = nameRef.current.value;
        const color = colorRef.current.value;
        const image = urlRef.current.value;
        const price = priceRef.current.value;
        const rating = parseFloat(ratingRef.current.value);

        const features = featuresRef.current.value.split(". ");
        const description = descriptionRef.current.value;
        const newProduct = {id, name, image, color, price, rating, features, description}

        fetch('https://glacial-headland-75671.herokuapp.com/products', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            if (data) {
                if (data.insertedId) {
                    alert("Product has been added!");
                    e.target.reset();
                }
            }
        })

    }
    return (
        <div>
            <form onSubmit={addAProductFormSubmit}>
                <div className="p-2 bg-white">
                    <h1 className='text-4xl mb-3 font-medium'>Add A Product</h1>
                    <p>Please fill in this form to add a new product.</p>
                    <hr className='mb-8' />

                    <label><b>Product ID</b></label>
                    <input ref={idRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Product ID" required />

                    <label><b>Product Name</b></label>
                    <input ref={nameRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Product Name" required />

                    <label><b>Product Image URL</b></label>
                    <input ref={urlRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Image URL" />

                    <label><b>Product Color</b></label>
                    <input ref={colorRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Product Color" required />

                    <label><b>Product Price</b></label>
                    <input ref={priceRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Product Price" required />

                    <label><b>Product Rating</b></label>
                    <input ref={ratingRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Product Rating" required />

                    <label><b>Product Features</b></label>
                    <input ref={featuresRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Separate Features by Dot" required />

                    <label><b>Product Description</b></label>
                    <textarea ref={descriptionRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' style={{ height: '200px' }} type="text" placeholder="Enter Product Description" required />

                    <button type="submit" className="bg-gray-800 text-white py-4 px-5 my-3 border-0 cursor-pointer w-full opacity-90 hover:opacity-100">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default AddAProduct;