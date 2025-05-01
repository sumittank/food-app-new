import React from 'react';
import { IoHeart } from "react-icons/io5";
import { useFavorites } from './FavouriteProvider';
import Cart from './Cart';

function Card({ items }) {
    const { toggleFav, giveFav } = useFavorites();

    const isItemLiked = giveFav.some(favItem => favItem._id === items._id);

    const toggleColor = () => {
        toggleFav(items);
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-4 flex flex-col sm:flex-row sm:justify-between mb-4">
                
                {/* Item Info Section */}
                <div className="flex flex-col justify-center mb-4 sm:mb-0 sm:pr-4">
                    <div className="text-lg sm:text-xl font-semibold">{items.name}</div>
                    <div className="text-xl sm:text-2xl text-gray-700">{items.city}</div>
                    <div className="text-lg sm:text-xl">{items.dishName}</div>
                    <div className="text-base sm:text-lg font-bold text-teal-600">₹{items.price}</div>
                    <div className="text-sm text-gray-600 mt-2">{items.description}</div>
                </div>

                {/* Image + Actions Section */}
                <div className="relative flex flex-col items-center">
                    <div className="mb-2">
                        <IoHeart
                            className={`cursor-pointer text-2xl sm:text-3xl ${isItemLiked ? 'text-pink-500' : 'text-gray-400'}`}
                            onClick={toggleColor}
                            title={isItemLiked ? 'Remove from Favorites' : 'Add to Favorites'}
                        />
                    </div>
                    <img
                        src={items.img || 'https://via.placeholder.com/150'}
                        alt={items.dishName || 'Item Image'}
                        className="h-36 w-40 sm:h-40 sm:w-44 rounded-xl object-cover"
                    />
                    <div className="absolute bottom-0 transform translate-y-1/2 w-full px-4">
                        <div className="bg-teal-100 text-gray-800 text-center rounded-md py-1 shadow-md mt-10">
                            <Cart items={items} key={items._id} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Card;