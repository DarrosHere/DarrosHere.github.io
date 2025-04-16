import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Home', 'About', 'Contact'];

  return (
    <div className="flex flex-row justify-center md:justify-start w-full p-4 gap-12">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-white ${activeTab === tab ? 'font-bold' : ''}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
