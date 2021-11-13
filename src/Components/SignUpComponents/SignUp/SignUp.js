import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const SignUp = () => {
    const history = useHistory();
    const { createNewUser, setError, error } = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const repeatPasswordRef = useRef();

    const registrationFormSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const repeatPassword = repeatPasswordRef.current.value;

        if (password !== repeatPassword) {
            setError("Password didn't match.");
        } else {
            createNewUser(name, email, password);
            history.push('/');
        }
    }

    return (
        <div className='mt-8 max-w-xl mx-auto'>
            <form onSubmit={registrationFormSubmit}>
                <div className="p-4 bg-white">
                    <h1 className='text-4xl mb-3 font-medium'>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr className='mb-8' />

                    <label><b>Name</b></label>
                    <input ref={nameRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="text" placeholder="Enter Name" required />

                    <label><b>Email</b></label>
                    <input ref={emailRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="email" placeholder="Enter Email" required />

                    <label><b>Password</b></label>
                    <input ref={passwordRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="password" placeholder="Enter Password" required />

                    <label><b>Repeat Password</b></label>
                    <input ref={repeatPasswordRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="password" placeholder="Repeat Password" required />
                    <hr className='mb-8' />
                    <p>By creating an account you agree to our <a href="/" className='text-blue-500'>Terms & Privacy</a>.</p>

                    <i className='text-base inline-block text-yellow-600 mt-8'>{error}</i>

                    <button type="submit" className="bg-gray-800 text-white py-4 px-5 my-3 border-0 cursor-pointer w-full opacity-90 hover:opacity-100">Sign up</button>
                </div>
                <p className='text-center my-5'>Already have an account? <Link to='/signin' className='text-blue-500 underline'>Sign up</Link></p>
            </form>
        </div>
    );
};

export default SignUp;