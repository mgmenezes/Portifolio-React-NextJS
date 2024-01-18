import React from "react";

const ProjectTag = ({ tagName, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-2 border-blue-500"
    : "text-white border-2 border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full px-6 py-3 text-xl cursor-pointer`}
      onClick={() => {
        onClick(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default ProjectTag;
