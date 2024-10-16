import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import logo from '/logowithoutbg.png';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    // Function to handle navigation to the Join page
    const handleDonateClick = () => {
        navigate('/signin'); // Navigate to the Join page
    };

    // Function to determine if the link is active
    const isActiveLink = (path) => location.pathname === path;

    return (
        <>
            <header className="font-medium font-poppins fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl drop-shadow-2xl transition-all duration-300">
                <nav className="flex justify-between items-center w-[92%] mx-auto my-2">
                    {/* Hamburger Icon */}
                    <div
                        onClick={toggleMenu}
                        className="text-xl text-gray-800 cursor-pointer md:hidden"
                    >
                        {isMenuOpen ? '✖' : '☰'}
                    </div>

                    {/* Logo */}
                    <div className='md:static'>
                        <img className="h-11 w-27" src={logo} alt="Logo" />
                    </div>

                    {/* Nav Links for larger screens */}
                    <div className="flex-row items-center hidden space-x-4 md:flex">
                        <ul className="flex flex-row space-x-4">
                            <li>
                                <Link
                                    className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                        isActiveLink('/') 
                                            ? 'bg-[#8b4513] text-white rounded-3xl'
                                            : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                    }`}
                                    to="/"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                        isActiveLink('/about-us') 
                                            ? 'bg-[#8b4513] text-white rounded-3xl'
                                            : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                    }`}
                                    to="/about-us"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                        isActiveLink('/project-page') 
                                            ? 'bg-[#8b4513] text-white rounded-3xl'
                                            : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                    }`}
                                    to="/project-page"
                                >
                                    Our Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                        isActiveLink('/gallery') 
                                            ? 'bg-[#8b4513] text-white rounded-3xl'
                                            : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                    }`}
                                    to="/gallery"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                        isActiveLink('/contact-us') 
                                            ? 'bg-[#8b4513] text-white rounded-3xl'
                                            : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                    }`}
                                    to="/contact-us"
                                >
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Join Us Button */}
                    <div className="items-center hidden gap-6 md:flex">
                        <button
                            className="px-6 py-3 text-white rounded-3xl bg-[#8b4513] hover:bg-opacity-70 transition-colors duration-300"
                            onClick={handleDonateClick}
                        >
                            Donate
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-16 left-1/2 transform -translate-x-1/2 w-[90%] bg-white rounded-lg shadow-lg transition-all duration-300 md:hidden ${
                        isMenuOpen ? 'block' : 'hidden'
                    }`}
                >
                    <ul className="flex flex-col p-4 space-y-4">
                        <li>
                            <Link
                                className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                    isActiveLink('/') 
                                        ? 'bg-[#8b4513] text-white rounded-3xl'
                                        : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                }`}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                    isActiveLink('/about-us') 
                                        ? 'bg-[#8b4513] text-white rounded-3xl'
                                        : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                }`}
                                to="/about-us"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                    isActiveLink('/project-page') 
                                        ? 'bg-[#8b4513] text-white rounded-3xl'
                                        : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                }`}
                                to="/project-page"
                            >
                                Our Projects
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`block py-2 px-4 text-gray-700 transition-colors duration-300 ${
                                    isActiveLink('/contact-us') 
                                        ? 'bg-[#8b4513] text-white rounded-3xl'
                                        : 'hover:text-primary hover:bg-[#8b4513] hover:bg-opacity-70 hover:rounded-3xl hover:text-white'
                                }`}
                                to="/contact-us"
                            >
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <button
                                className="block py-2 px-4 text-white bg-[#8b4513] rounded-3xl hover:bg-opacity-70 transition-colors duration-300 w-full -mr-10"
                                onClick={handleDonateClick}
                            >
                                Donate Now
                            </button>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default NavBar;
