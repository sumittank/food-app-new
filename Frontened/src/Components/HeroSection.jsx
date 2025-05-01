import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import deliveryboy from '../assets/deliveryboy.jpeg';

function HeroSection() {
    const scrollByViewport = () => {
        window.scrollBy({
            top: window.innerHeight - 50,
            behavior: 'smooth'
        });
    };

    return (
        <div className='flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4 mb-20'>
                        <div className='lg:w-2/5 w-full flex justify-center mt-8 lg:mt-0'>
                <img
                    src={deliveryboy}
                    className='h-auto w-4/5 max-w-sm'
                    alt='Delivery Boy'
                />
            </div>
            <div className='lg:w-3/5 w-full'>
                <div className='text-center lg:text-left'>
                    <p className='text-3xl sm:text-4xl lg:text-6xl mt-6 lg:mt-20'>
                        Now order your <span className='text-teal-500'>local</span>
                    </p>
                    <p className='text-3xl sm:text-4xl lg:text-6xl'>
                        <span className='text-teal-500'>food <span className='text-black'>&</span> snacks</span> from
                    </p>
                    <p className='text-3xl sm:text-4xl lg:text-6xl'>every corner!!</p>
                    <p className='mt-4 text-sm sm:text-base lg:text-lg'>
                        <span className='text-teal-500'>"</span>From your favorite corner bakery to the best street food, get it all delivered fast and fresh.
                    </p>
                    <p className='text-sm sm:text-base lg:text-lg'>
                        Your local favorites are just a click away!<span className='text-teal-500'>"</span>
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row items-center lg:items-start mt-8 lg:mt-20 gap-4'>
                    <button 
                        onClick={scrollByViewport}
                        className='text-xl sm:text-2xl lg:text-4xl bg-teal-100 p-2 font-semibold text-black w-52 sm:w-64 text-center rounded-3xl'
                    >
                        Order Now
                    </button>
                    <button onClick={scrollByViewport}>
                        <FaCartPlus className='text-3xl sm:text-4xl ml-0 sm:ml-4' />
                    </button>
                </div>

                <div className='flex flex-col sm:flex-row items-center mt-8 gap-4'>
                    <input
                        type='email'
                        placeholder='Email : example@gmail.com'
                        className='bg-teal-50 w-full sm:w-96 h-10 rounded-md border-2 hover:border-teal-200 outline-none text-center text-gray-700 text-lg'
                    />
                    <button className='text-lg bg-teal-100 p-1 font-medium text-black rounded-2xl w-28'>
                        Submit
                    </button>
                </div>
            </div>


        </div>
    );
}

export default HeroSection;
