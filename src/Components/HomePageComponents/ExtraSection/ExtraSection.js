import React from 'react';
import gopro from '../../../images/gopro.png';

const ExtraSection = () => {
    return (
        <div className='container mx-auto my-8'>
            <h2 className='text-3xl font-medium text-center mb-8'>About Us</h2>
            <div class="grid gap-4 grid-col-1 sm:grid-cols-2 border-2 bg-gray-100">
                <div className='p-2 sm:p-4'>
                    <img src={gopro} alt="" />
                </div>
                <div className='flex justify-center items-center'>
                    <div className='text-center'>
                        <h2 className='text-center text-4xl mb-12'>Why Choose GoPro?</h2>
                        <p className='p-2 sm:p-4 text-lg'>GoPro cameras have a fixed 170-degree lens. This allows for wide-angle photos and videos. ... Basically, at 170-degrees, it will capture almost everything in front of the camera. To get absolutely everything, it would need another 10-degrees.</p>
                        <button className='bg-gray-700 rounded-full p-3 text-white mr-3'>Learn More</button><button className='bg-white border-2 rounded-full p-3'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;