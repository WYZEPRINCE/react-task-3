import React from "react";
// import { useState } from "react";
import ArrowRight from "../assets/images/arrowRight.png";

// 

const DashboardNav = ({ title, to, icon, isCollapsed, activeLink, handleLinkClick }) => {
  const isActive = activeLink === to;

  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick(to);
    }
  };

  return (
    <li
      className={`
        flex items-center justify-between cursor-pointer rounded-lg transition-all duration-200 
        ${isActive ? 'bg-[#5932EA] text-white' : 'text-[#9197B3] hover:bg-gray-50'}
        ${isCollapsed ? 'px-3 py-2 mx-auto w-12' : 'px-5 py-3 mx-3'}
      `}
      onClick={handleClick}
      data-to={to}
      title={isCollapsed ? title : undefined}
    >
      <div className="flex items-center">
        {icon && (
          <span className={`${isCollapsed ? '' : 'mr-3'}`}>
            <img
              src={icon}
              alt="icon"
              className={`w-6 h-6 ${isActive ? 'brightness-0 invert' : ''}`}
            />
          </span>
        )}
        {!isCollapsed && (
          <span className="text-sm font-medium">{title}</span>
        )}
      </div>
      {!isCollapsed && (
        <img
          src={ArrowRight}
          alt="arrow"
          className={`w-4 h-4 ${isActive ? 'brightness-0 invert' : ''}`}
        />
      )}
    </li>
  );
};

export default DashboardNav;