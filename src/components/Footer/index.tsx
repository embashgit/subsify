// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center py-10">
      <div className="flex flex-col items-center">
        <nav className="flex gap-6 mb-6">
          {["About", "Help", "Privacy policy", "Terms"].map((item) => (
            <a key={item} className="text-[#49779c] text-base font-normal leading-normal" href="#">
              {item}
            </a>
          ))}
        </nav>
        <p className="text-[#49779c] text-base font-normal">@2024 Subsify</p>
      </div>
    </footer>
  );
};

export default Footer;
