import React, { useState } from 'react';
import {  Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../images/mnit.png';

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Call for Papers", link: "/papers" },
    { name: "Register", link: "/register" },
    { name: "Important Dates", link: "/contact" },
    { name: "Committe", link: "/commitee" },
    { name: "Speakers", link: "/speakers" },
    {name:"Contact Us",link:"/vokey"}
  ];

  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 font-custom z-50'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-xl md:text-2xl cursor-pointer flex items-center gap-2'>
          {/* Image Logo */}
          <img src={logoImage} alt="Logo" className="h-8 w-8 md:h-11 md:w-11 " />
          
          {/* Text Logo */}
          <span className="text-[#750014] font-semibold">ICMAMC - 2024</span>
        </div>

        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <Link
                to={link.link}
                className={`text-gray-800 hover:text-[#750014] duration-500 ${location.pathname === link.link ? 'bg-[#750010] rounded p-2 text-white hover:text-white' : ''}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
