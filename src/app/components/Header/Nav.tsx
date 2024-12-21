// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import ThemeUese from '../ThemeUses';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between mx-auto px-6 py-4 shadow-md">
//       <div className="flex items-center">
//         <Link href="/" className="flex items-center">
//           <Image 
//             src="/your-logo.png"
//             alt="Logo" 
//             width={40} 
//             height={40} 
//             className="mr-3"
//           />
//           <span className="text-xl font-bold text-gray-800">Company Name</span>
//         </Link>
//       </div>
      



//       <div className="relative">
//         <input 
//           type="checkbox" 
//           id="checkbox_toggle" 
//           className="hidden"
//           checked={isMenuOpen}
//           onChange={() => setIsMenuOpen(!isMenuOpen)}
//         />
//         <label 
//           htmlFor="checkbox_toggle" 
//           className="text-2xl cursor-pointer md:hidden"
//         >
//           &#9776;
//         </label>
        
//         <ul className={`md:flex md:items-center md:gap-6 ${
//           isMenuOpen 
//             ? 'absolute right-0 left-0 top-16 flex flex-col items-center shadow-md py-4 space-y-4' 
//             : 'hidden md:flex'
//         }`}>
//           <li><Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link></li>
//           <li><Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link></li>
//           <li><Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link></li>
//           <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link></li>
//           <li><Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link></li>
//           <ThemeUese/>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ThemeToggler from '../Theme/ThemeUses'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between mx-auto px-6 py-4 shadow-md bg-white dark:bg-gray-900">
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/m.svg"
            alt="Logo" 
            width={40} 
            height={40} 
            className="mr-3 bg-white"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-gray-200">my Portfolio</span>
        </Link>
      </div>


<div className="relative z-50 md:z-0">
        {/* Menu toggle */}
        <input 
          type="checkbox" 
          id="checkbox_toggle" 
          className="hidden"
          checked={isMenuOpen}
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <label 
          htmlFor="checkbox_toggle" 
          className="text-2xl cursor-pointer md:hidden text-gray-700 dark:text-gray-200"
        >
          &#9776;
        </label>
        
        {/* Navigation links */}
        <ul className={`md:flex md:items-center md:gap-6 transform transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'absolute right-[-23px]  w-[200px] top-[52.10px] flex flex-col items-center shadow-md py-4 space-y-4 bg-white dark:bg-gray-900 opacity-100 translate-y-0' 
            : 'hidden md:flex opacity-0 -translate-y-full md:translate-y-0 md:opacity-100'
        }`}>
          <li><Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">About</Link></li>
          <li><Link href="/services" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Services</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Contact</Link></li>
          <li><Link href="/blog" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 transition-colors">Blog</Link></li>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </div>


   

    </nav>
  );
};

export default Navbar;
