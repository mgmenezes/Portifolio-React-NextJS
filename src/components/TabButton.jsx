import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const activeTab = active
    ? "text-blue-400 border-b border-b-blue-400"
    : "text-white border-none";
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-blue-400 border-b ${activeTab}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
