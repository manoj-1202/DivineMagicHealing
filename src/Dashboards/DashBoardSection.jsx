import React from 'react';

const DashBoardSection = ({ activeSection }) => {
  if (activeSection !== "dashboard") return null;

  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-2xl font-bold mb-6">
        Dashboard
      </h1>
      <div className="text-center mb-6">
        <div className="bg-purple-400 text-white p-8 rounded-xl shadow-lg flex items-center justify-between gap-6">
          <p className="text-2xl font-bold">Total Sales:</p>
          <p className="text-xl">Sales</p>
          <p className="text-2xl font-bold">6000</p>
          <p className="text-sm">(Last 24 Hours)</p>
        </div>
      </div>
    </>
  );
};

export default DashBoardSection;
