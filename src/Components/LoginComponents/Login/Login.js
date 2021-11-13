import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location?.state?.from ? location?.state.from : '/';
    const {error, signInUser} = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const loginFormSubmit = (e) => {
        e.preventDefault();
        const email = emailRef?.current?.value;
        const password = passwordRef?.current?.value;
        signInUser(email, password, redirect_uri);
        history.push(redirect_uri);
    }
    return (
        <div className='mt-8 max-w-xl mx-auto'>
            <form onSubmit={loginFormSubmit}>
                <div className="p-4 bg-white">
                    <h1 className='text-4xl mb-3 font-medium'>Sign in</h1>
                    <hr className='mb-8' />

                    <label><b>Email</b></label>
                    <input ref={emailRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="email" placeholder="Enter Email" required />

                    <label><b>Password</b></label>
                    <input ref={passwordRef} className='focus:bg-gray-100 focus:outline-none w-full p-3 my-4 border-0 bg-gray-200 block' type="password" placeholder="Enter Password" required />

                    <hr className='mb-8' />

                    <i className='text-base inline-block text-yellow-600 mt-8'>{error}</i>

                    <button type="submit" className="bg-gray-800 text-white py-4 px-5 my-3 border-0 cursor-pointer w-full opacity-90 hover:opacity-100">Sign in</button>
                </div>
                <p className='text-center my-5'>New here? <Link to='/signup' className='text-blue-500 underline'>Create a New Account</Link></p>
            </form>
        </div>
    );
};

export default Login;