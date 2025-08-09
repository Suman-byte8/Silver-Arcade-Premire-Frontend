import React from 'react'

const SemiNavbar = () => {
    const navLinks = [
        { name: 'Destination', path: '/' },
        { name: 'Meeting', path: '/' },
        { name: 'Weddings', path: '/' },
        { name: 'Sleep Bounqute', path: '/' },
        { name: 'News & Upcoming Events', path: '/' },
        { name: 'Contacts', path: '/' },
        ]
    
  return (
    <div className='w-full absolute top-0 right-0 z-10 hover:bg-white p-3 font-semibold bg-transparent text-white hover:text-black transition-all duration-300 ease-in-out'>
        <div className='flex items-center justify-end relative top-0 right-0 '>
            <ul className="">
                {navLinks.map((link, index) => (
                    <li key={index} className="inline-block mr-4">
                        <a href={link.path} className="hover:text-gray-400">{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default SemiNavbar