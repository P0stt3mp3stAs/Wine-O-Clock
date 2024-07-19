'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const icons = {
  home: '/icons/Whome.png',
  menu: '/icons/Wmenu.png',
  book: '/icons/Wbook.png',
  pay: '/icons/Wpay.png',
  profile: '/icons/Wprofile.png',
};

const pages = [
  { name: 'Home', path: '/', icon: icons.home },
  { name: 'Menu', path: '/menu', icon: icons.menu },
  { name: 'Book', path: '/book', icon: icons.book },
  { name: 'Pay', path: '/pay', icon: icons.pay },
];

export default function Navbar() {
  const currentPath = usePathname();

  return (
    <nav className="text-white fixed w-full z-10 top-0 flex justify-between items-center px-4 py-1.5">
      <div className="bg-[#767676] flex space-x-4 h-12 items-center rounded-full py-7 px-1">
        {pages.map((page) => (
          <Link href={page.path} key={page.name}>
            <div className={`flex items-center space-x-2 cursor-pointer rounded-full ${currentPath === page.path ? 'bg-brown' : ''}`} style={{ backgroundColor: currentPath === page.path ? '#5E3200' : 'transparent', padding: '0.5rem' }}>
              <img src={page.icon} alt={`${page.name} icon`} className="h-8 w-8" />
              {currentPath === page.path && <span>{page.name}</span>}
            </div>
          </Link>
        ))}
      </div>
      <Link href="/dashboard">
        <div className={`bg-[#767676] rounded-full h-12 w-12 flex items-center justify-center cursor-pointer ${currentPath === '/dashboard' ? 'bg-brown' : 'hover:bg-[#5E3200]'}`} style={{ backgroundColor: currentPath === '/dashboard' ? '#5E3200' : '#767676' }}>
          <img src={icons.profile} alt="Profile icon" className="h-12 w-12" />
        </div>
      </Link>
    </nav>
  );
}