import React, { useState } from 'react';
import { IoHeart } from "react-icons/io5";
import { useFavorites } from './FavouriteProvider';
import Cart from './Cart';

function CardCopy({ items }) {
    const [isClicked, setIsClicked] = useState(false); // Track if heart is clicked
    const { toggleFav, giveFav, setGiveFav } = useFavorites();

    const toggleColor = () => {
        setIsClicked(!isClicked); // Toggle the heart icon color

        // Check if the item is already in favorites
        const isItemInFavorites = giveFav.some(favItem => favItem._id === items._id);

        if (isItemInFavorites) {
            // Remove the item from favorites if already added
            setGiveFav(giveFav.filter(favItem => favItem._id !== items._id));
        } else {
            // Add the item to favorites if not already added
            setGiveFav([...giveFav, items]);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row w-3/4 justify-between pt-8 pb-8 shadow-lg rounded-lg">
                {/* Item Information */}
                <div className='pt-3 pb-3 pl-2 flex justify-center flex-col'>
                    <div className='text-xl font-semibold'>{items.name}</div>
                    <div className='text-2xl mb-2 text-teal-600'>{items.city}</div>
                    <div className='text-xl'>{items.dishName}</div>
                    <div className='text-lg text-gray-800'>₹{items.price}</div>
                    <div className='text-sm pt-4 text-gray-500'>{items.description}</div>
                </div>

                {/* Heart Icon and Item Image */}
                <div className="relative flex flex-col sm:flex-row justify-center sm:justify-start mt-4 sm:mt-0">
                    <div className='mr-3 cursor-pointer'>
                        {/* Toggle heart color based on favorite status */}
                        <IoHeart
                            className={`text-3xl ${isClicked ? 'text-gray-400' : 'text-pink-500'}`}
                            onClick={toggleColor}
                        />
                    </div>
                    <img src={items.img} alt={items.name} className="h-36 w-40 rounded-xl mt-4 sm:mt-0 sm:ml-4" />

                    {/* Add to Cart Button */}
                    <div className="absolute bottom-2 w-full sm:relative sm:bottom-auto sm:w-36">
                        <div className='bg-teal-100 text-gray-800 w-3/4 mx-auto text-center h-7 rounded-md'>
                            <Cart items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCopy;
