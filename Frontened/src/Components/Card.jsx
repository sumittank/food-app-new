import React from 'react';
import { IoHeart } from "react-icons/io5";
import { useFavorites } from './FavouriteProvider';
import Cart from './Cart';

function Card({ items }) {
    // Use context state to determine if the item is liked
    const { toggleFav, giveFav } = useFavorites();

    // Check if the item is liked by comparing with context state
    const isItemLiked = giveFav.some(favItem => favItem._id === items._id);
    
    const toggleColor = () => {
        toggleFav(items); // Toggle the item in the favorites context
    };

    return (
        <> 
        <div className="flex justify-center">
            <div className="flex w-3/4 justify-between pt-8 pb-9 shadow-sm">
                <div className='pt-3 pb-3 pl-2 flex justify-center flex-col'>
                    <div className='text-xl'>{items.name}</div>
                    <div className='text-2xl mb-2'>{items.city}</div>
                    <div className='text-xl'>{items.dishName}</div>
                    <div className='text-lg'>₹{items.price}</div>
                    <div className='text-sm pt-4'>{items.description}</div>
                </div>

                <div className="relative flex">
                    <div className='mr-3'> 
                        {/* Use context state to determine heart icon color */}
                        <IoHeart
                            className={`cursor-pointer ${isItemLiked ? 'text-pink-500' : 'text-gray-400'}`}
                            onClick={toggleColor} // Toggle color on click
                        />
                    </div>
                    <img src={items.img} alt="item" className="h-36 w-40 rounded-xl" />
                    <div className="absolute mt-36 w-full">
                        <div className='bg-teal-100 text-gray-800 w-3/4 mx-auto text-center h-7 rounded-md ml-10 mt-1'><Cart items={items} key={items._id} /></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;

