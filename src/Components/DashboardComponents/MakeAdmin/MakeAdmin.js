import React, { useRef } from 'react';

const MakeAdmin = () => {
    const emailRef = useRef();
    const submitMakeAdmin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        fetch("https://glacial-headland-75671.herokuapp.com/users", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert(`You made ${email} Admin!`);
                }
            })
    }
    return (
        <div className='max-w-3xl mx-auto'>
            <form onSubmit={submitMakeAdmin}>
                <div className="p-2 bg-white">
                    <h1 className='text-4xl mb-3 font-medium'>Make Admin</h1>
                    <p>Please put email of an user to make his/her admin.</p>
                    <hr className='mb-8' />

                    <label><b>Email</b></label>
                    <input ref={emailRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="email" placeholder="Enter Email" required />

                    <button type="submit" className="bg-gray-800 text-white py-4 px-5 my-3 border-0 cursor-pointer w-full opacity-90 hover:opacity-100">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;