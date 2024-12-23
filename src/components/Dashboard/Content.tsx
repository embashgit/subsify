// components/MainContent.tsx
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 px-6 py-5">
      <h1 className="text-[#0d151c] text-2xl font-bold">Dashboard</h1>
      <p className="text-[#0d151c] text-base font-normal leading-normal">
        You spend $1,236 per year on subscription services. Here is a breakdown of your spending across various categories.
      </p>

      <section>
        <h2 className="text-[#0d151c] text-lg font-bold">Total spending</h2>
        <div className="flex justify-between my-4">
          <span className="text-[#0d151c] text-base font-medium">Annual spending</span>
          <span className="text-[#0d151c] text-sm">1236</span>
        </div>
        <div className="bg-[#cedde8] h-2 rounded-full">
          <div className="bg-[#2094f3] h-full w-full rounded-full"></div>
        </div>
      </section>

      <section>
        <h2 className="text-[#0d151c] text-lg font-bold">Spending by category</h2>
        <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-6 py-3">
          {["Entertainment", "Music", "Shopping", "Video Streaming", "Gaming", "News", "Software"].map((category, index) => (
            <React.Fragment key={category}>
              <span className="text-[#49779c] text-sm font-bold">{category}</span>
              <div className="bg-[#e7eef4] h-2 relative">
                <div className="bg-[#49779c] h-full" style={{ width: `${(index + 1) * 10}%` }}></div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MainContent;
