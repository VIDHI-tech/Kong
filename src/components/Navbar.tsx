import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-6 py-7 bg-b text-white xl:px-[calc(50%-600px)]"> 
      <img src="/logo.png" alt="Logo" className="h-10 md:h-16 cursor-pointer" onClick={() => window.location.href = "/"} />
 
      <div className="hidden md:flex space-x-6 lg:space-x-14 text-xl font-extrabold tracking-tighter">
        <a href="#whitepaper" className="hover:text-yellow-400">
          Whitepaper
        </a>
        <a href="#presale" className="hover:text-yellow-400">
          Pre-Sale
        </a>
        <a href="#roadmap" className="hover:text-yellow-400">
          Roadmap
        </a>
      </div>
 
      <button className="hidden md:block text-xl font-bold tracking-tighter bg-r border border-black border-e-4 border-b-4 border-l-0 border-t-0 px-5 py-2 rounded-md hover:bg-red-600">
        Whitepaper
      </button>
 
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl focus:outline-none"
        >
          &#9776;
        </button>
      </div>
 
      {isOpen && (
        <div className="absolute w-1/2 top-full right-6 mt-2 bg-b p-4 rounded-lg shadow-lg z-50 md:hidden">
          <a
            href="#whitepaper"
            className="block hover:text-yellow-400 py-2 border-b border-gray-700"
          >
            Whitepaper
          </a>
          <a
            href="#presale"
            className="block hover:text-yellow-400 py-2 border-b border-gray-700"
          >
            Pre-Sale
          </a>
          <a
            href="#roadmap"
            className="block hover:text-yellow-400 py-2"
          >
            Roadmap
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
