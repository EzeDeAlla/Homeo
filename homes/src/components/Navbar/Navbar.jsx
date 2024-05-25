import React from 'react';
import bannerBg from '../../assets/images/banner-bg.svg';
import logoHome from '../../assets/images/loghome.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="navbar-area bg-gray-100 py-1 shadow-md " style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="text-black text-lg font-semibold">
              <img src={logoHome} alt="Logo" className="ml-10 h-auto w-auto" />
            </a>
          </div>
          <div className="hidden md:flex space-x-4 ml-96">
          <Link to ="/">
            <a href="#" className="text-black hover:text-col-blue hover:border-b-2 hover:border-b-col-blue border-b-2 border-transparent pb-1">Home</a>
            </Link>
           <Link to ="/properties">
            <a href="#" className="text-black hover:text-col-blue hover:border-b-2 hover:border-b-col-blue border-b-2 border-transparent pb-1">Properties</a>
            </Link>
            <a href="#" className="text-black hover:text-col-blue hover:border-b-2 hover:border-b-col-blue border-b-2 border-transparent pb-1">Agents</a>
            <a href="#" className="text-black hover:text-col-blue hover:border-b-2 hover:border-b-col-blue border-b-2 border-transparent pb-1">About Us</a>
          </div>
          <div className="md:flex items-center space-x-4 mr-12">
            <a href="#" className="text-black hover:text-col-blue text-xl">Log In</a>
            <button className="book-a-call bg-blue-500 text-white font-nunito font-bold hover:bg-blue-600 px-4 py-3 rounded-md focus:outline-none">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default Navbar;