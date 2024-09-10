import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, PlusIcon } from '@heroicons/react/24/outline'; // Import icons

function NavBar() {
  const location = useLocation(); // Get current path

  // Determine if we're on the Home page or Book Details page
  const isHomePage = location.pathname === '/';
  const isBookDetailsPage = location.pathname.startsWith('/book/');

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold flex items-center">
          Book Store
        </Link>
        <div className="flex gap-4">
          {isHomePage || isBookDetailsPage ? (
            <>
              <Link 
                to="/add-book" 
                className="bg-white text-black px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105"
              >
                <PlusIcon className="w-5 h-5" />
                + New Book
              </Link>
              {isBookDetailsPage && (
                <Link 
                  to="/" 
                  className="bg-white text-black  px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform transform  "
                >
                  <HomeIcon className="w-5 h-5" />
                  Home
                </Link>
              )}
            </>
          ) : (
            <Link 
              to="/" 
              className="bg-white text-black  px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105 "
            >
              <HomeIcon className="w-5 h-5" />
              Go Home
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
