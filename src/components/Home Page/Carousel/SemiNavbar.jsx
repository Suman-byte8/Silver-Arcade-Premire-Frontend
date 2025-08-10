import React, { useState } from 'react';
import { FaBars, FaUser, FaTimes } from 'react-icons/fa';

const SemiNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const navLinks = [
        { name: 'Destination', path: '/' },
        { name: 'Meeting', path: '/' },
        { name: 'Weddings', path: '/' },
        { name: 'Sleep Bounqute', path: '/' },
        { name: 'News & Upcoming Events', path: '/' },
        { name: 'Contacts', path: '/' },
    ];
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className='w-full absolute top-0 right-0 z-20 bg-transparent'>
            {/* Mobile Navigation */}
            <div className='md:hidden flex items-center justify-between p-3'>
                <button 
                    onClick={toggleMenu}
                    className='text-white hover:text-gray-300 transition-colors'
                >
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                
                <div className='text-white font-semibold text-sm sm:text-base'>
                    SILVER ARCADE PREMIERE
                </div>
                
                <FaUser className='text-white text-xl' />
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-white shadow-lg'>
                    <ul className='py-4'>
                        {navLinks.map((link, index) => (
                            <li key={index} className='border-b border-gray-200 last:border-b-0'>
                                <a 
                                    href={link.path} 
                                    className='block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors'
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {/* Desktop Navigation */}
            <div className='hidden md:block hover:bg-white p-3 font-semibold bg-transparent text-white hover:text-black transition-all duration-300 ease-in-out'>
                <div className='flex items-center justify-end relative top-0 right-0'>
                    <ul className='flex items-center space-x-6'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.path} className='hover:text-gray-400 transition-colors text-sm lg:text-base'>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SemiNavbar;