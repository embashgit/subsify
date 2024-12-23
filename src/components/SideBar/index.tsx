import React from 'react';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import { navItems } from '../../../constants/ui'; // Assuming navItems is an array of objects
import Icon from '../Icon'; // Assuming you have an Icon component

const Sidebar: React.FC = () => {
  const router = useRouter(); // Get the current route

  return (
    <div className="flex flex-col w-80 gap-4 p-4">
      {/* User Profile Section */}
      <div className="flex gap-3 items-center">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
          style={{
            backgroundImage: 'url("https://cdn.usegalileo.ai/stability/07870228-95dd-4135-8df8-52fee4f8ea6f.png")'
          }}
        ></div>
        <div>
          <h1 className="text-[#0d151c] text-base font-medium leading-normal">Jane Smith</h1>
          <p className="text-[#49779c] text-sm font-normal leading-normal">View Profile</p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col gap-2">
        {navItems.map((nav, index) => {
          // Check if the current route matches the nav item URL
          const isActive = router.pathname === nav.url;

          return (
            <div
              key={index}
              className={`flex items-center gap-3 px-3 py-2 ${
                isActive ? 'bg-[#e7eef4]' : ''
              } rounded-xl cursor-pointer`}
              onClick={() => router.push(nav.url)} // Navigate to the route when clicked
            >
              <Icon name={nav.icon} alt={nav.name} />
              <p className="text-[#0d151c] text-sm font-medium leading-normal">{nav.name}</p>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
