import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black text-white mt-8'>
            <div className='flex justify-center items-center p-4'>
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 max-w-5xl">
                    <div>
                        <h3 className='uppercase mb-4 font-bold text-xl'>Contact us</h3>
                        <p className='font-light text-base mb-4'>GoPro, Inc. is an American technology company founded in 2002 by Nick Woodman. It manufactures action cameras and develops its own mobile apps and video-editing software.</p>
                        <p className='font-light mb-4'><b>Email:</b> admin@gopro.com</p>
                        <p className='font-light'><b>Address:</b> New York, United States</p>
                    </div>
                    <div>
                        <h3 className='uppercase mb-4 font-bold text-xl'>Useful Links</h3>
                        <Link to='/' className='block mb-2 text-blue-600'>Home</Link>
                        <Link to='/dashboard' className='block mb-2 text-blue-600'>Dashboard</Link>
                        <Link to='/explore' className='block mb-2 text-blue-600'>Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;