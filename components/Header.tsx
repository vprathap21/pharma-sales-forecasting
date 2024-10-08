import React from 'react';
import { ModeToggle } from './ThemeToggle';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <header className="flex justify-between items-center py-3 px-4 md:py-4 md:px-8 lg:px-16">
        {/* Logo / Brand Name */}
        <div className="flex items-center space-x-2 text-xl md:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 dark:from-blue-400 dark:to-green-400">
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-blue-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm3 9H7a1 1 0 000 2h6a1 1 0 000-2z"></path>
          </svg>
          <Link href="/">
            <span>PharmaPredictor</span>
          </Link>
        </div>

        {/* Right Side: Mode Toggle and Login */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="text-xs md:text-sm">
            <ModeToggle />
          </div>
          
          <Avatar className="text-xs md:text-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </div>
  );
};

export default Header;
