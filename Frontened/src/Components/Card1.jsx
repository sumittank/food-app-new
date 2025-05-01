import React from 'react';

function Card1({ items }) {
    return (
        <div className="pt-3 pb-3 mr-10">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pt-4 pb-4 h-auto bg-white rounded-lg shadow-md flex flex-col items-center">
                
                {/* Image Section */}
                <div className="w-full h-40 overflow-hidden rounded-lg mb-4">
                    <img
                        src={items.img || 'https://via.placeholder.com/150'}
                        alt={items.name || 'Item Image'}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Item Name */}
                <div className="text-lg sm:text-xl font-semibold text-gray-800 mt-2 text-center">
                    {items.name}
                </div>

                {/* Item City */}
                <div className="text-sm sm:text-lg text-gray-600 mt-1 text-center">
                    {items.city}
                </div>
            </div>
        </div>
    );
}

export default Card1;