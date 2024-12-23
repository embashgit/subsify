// components/Header.tsx
import React from 'react';
import Icon from '../Icon';
import { HeaderActions, navItems } from '../../../constants/ui';

const Header: React.FC = () => {

     const navLinks = [...navItems.slice(0, -2)];
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7eef4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#0d151c]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_319)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_6_319">
                <rect width="48" height="48" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-[#0d151c] text-lg font-bold leading-tight tracking-[-0.015em]">Subsify</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
      <nav className="flex items-center gap-9">
            {navLinks.map((link, index) => (
                <a
                key={index}
                className="text-[#0d151c] text-sm font-medium leading-normal"
                href={link.url}
                >
                {link.name}
                </a>
            ))}
            </nav>
        <div className="flex gap-2">
          {HeaderActions.map(({icon,name}, index) => (
            <button
              key={index}
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#e7eef4] text-[#0d151c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <Icon name={icon} alt={name} />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
