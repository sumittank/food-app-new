import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from './FavouriteProvider';
import { IoFastFoodOutline } from "react-icons/io5";
import { ImSwitch } from "react-icons/im";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
    const { search, setSearch } = useFavorites();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const inputChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold text-teal-600">
                        Drop
                    </Link>
                </div>

                {/* Search bar (visible on all screen sizes) */}
                <div className="flex-1 mx-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-teal-50 w-full sm:w-64 rounded-md border px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-teal-300"
                        onChange={inputChange}
                        value={search}
                    />
                </div>

                {/* Desktop Nav + Auth Buttons */}
                <div className="hidden md:flex md:items-center md:gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/topcity"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                    >
                        Top City
                    </NavLink>
                    <NavLink
                        to="/topitems"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                    >
                        Top Items
                    </NavLink>
                    <NavLink
                        to="/favitem"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                    >
                        Favourite Items
                    </NavLink>

                    {localStorage.getItem('authToken') ? (
                        <div className="flex items-center gap-4">
                            <NavLink
                                to="/myorders"
                                className={({ isActive }) =>
                                    isActive ? 'text-teal-600 flex items-center' : 'text-gray-700 flex items-center'
                                }
                            >
                                My Orders <IoFastFoodOutline className="ml-1 text-xl" />
                            </NavLink>
                            <NavLink
                                to="/logout"
                                className="flex items-center text-gray-700"
                            >
                                Logout <ImSwitch className="ml-1 text-red-700 text-xl" />
                            </NavLink>
                        </div>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/register" className="text-gray-700">
                                Register
                            </Link>
                            <Link to="/login" className="text-gray-700">
                                Login
                            </Link>
                        </div>
                    )}
                </div>

                {/* Hamburger (visible only on small screens) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-3xl text-teal-600 focus:outline-none">
                        {menuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown (visible when menuOpen is true) */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-3 flex flex-col">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/topcity"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                        onClick={toggleMenu}
                    >
                        Top City
                    </NavLink>
                    <NavLink
                        to="/topitems"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                        onClick={toggleMenu}
                    >
                        Top Items
                    </NavLink>
                    <NavLink
                        to="/favitem"
                        className={({ isActive }) =>
                            isActive ? 'text-teal-600 font-semibold' : 'text-gray-700'
                        }
                        onClick={toggleMenu}
                    >
                        Favourite Items
                    </NavLink>

                    {localStorage.getItem('authToken') ? (
                        <>
                            <NavLink
                                to="/myorders"
                                className={({ isActive }) =>
                                    isActive ? 'text-teal-600 flex items-center' : 'text-gray-700 flex items-center'
                                }
                                onClick={toggleMenu}
                            >
                                My Orders <IoFastFoodOutline className="ml-1 text-xl" />
                            </NavLink>
                            <NavLink
                                to="/logout"
                                className="flex items-center text-gray-700"
                                onClick={toggleMenu}
                            >
                                Logout <ImSwitch className="ml-1 text-red-700 text-xl" />
                            </NavLink>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="text-gray-700" onClick={toggleMenu}>
                                Register
                            </Link>
                            <Link to="/login" className="text-gray-700" onClick={toggleMenu}>
                                Login
                            </Link>
                        </>
                    )}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
