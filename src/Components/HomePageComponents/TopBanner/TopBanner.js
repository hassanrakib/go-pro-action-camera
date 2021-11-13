import React from 'react';
import goProIntro from '../../../videos/gopro-intro.mp4';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className='relative' id='top-banner'>
            <video src={goProIntro} autoPlay loop playsInline muted
                className='absolute top-0 left-0 object-cover h-full w-full'></video>
            <div id="overlay-back" className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='h-full flex text-center justify-center items-center text-white'>
                    <div>
                        <h1>
                            <span id='text-explore' className='uppercase text-5xl md:text-7xl block mb-8'>Capture</span>
                            <span className='block text-2xl md:text-4xl font-thin mb-8'>The Actions of Your Life</span>
                        </h1>
                        <button className='uppercase text-xl border-2 rounded-full py-2 px-8 bg-gray-800 font-medium'>
                            Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;