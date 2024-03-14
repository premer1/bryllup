import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 navfont text-xl">
              <div className="md:hidden">
          <button onClick={toggleMenu} className="flex focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>  
      <div className="flex items-center justify-center">      
        <div className="flex jusitfy-center hidden md:flex space-x-4 border-b-2">
          <Link to="/" className="hover:text-gray-600">Forside</Link>
          <Link to="/praktisk-info" className="hover:text-gray-600">Praktisk Info</Link>
          <Link to="/tidslinje" className="hover:text-gray-600">Tidslinje</Link>
          <Link to="/skjema" className="hover:text-gray-600">Kommer du?</Link>
          <Link to="/toastmaster" className="hover:text-gray-600">Toastmaster</Link>
          <Link to="/forlovere" className="hover:text-gray-600">Forlovere</Link>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link to="/" className="block py-2 px-4">Home</Link>
          <Link to="/praktisk-info" className="block py-2 px-4">Praktisk Info</Link>
          <Link to="/tidslinje" className="block py-2 px-4">Tidslinje</Link>
          <Link to="/skjema" className="block py-2 px-4">Skjema</Link>
          <Link to="/toastmaster" className="block py-2 px-4">Toastmaster</Link>
          <Link to="/forlovere" className="block py-2 px-4">Forlovere</Link>
        </div>
      )}
    </nav>
  );
}

export default NavMenu;
