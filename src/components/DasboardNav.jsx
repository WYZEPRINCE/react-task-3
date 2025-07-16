import React from "react";
import { useState } from "react";
import ArrowRight from "../assets/images/arrowRight.png";

const DashboardNav = ({ title, to, icon }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(true);
  };

  return (
    <ul>
      <div></div>
      <li
        href={to}
        style={{
          fontSize: "14px",
          fontWeight: "500",
          backgroundColor: isActive ? "#5932EA" : "transparent",
          color: isActive ? "white" : "#9197B3",
          padding: "10px 20px",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "250px",
          border: "none",
          borderRadius: isActive ? "8px" : "0px",
        }}
        onClick={handleClick}
      >
        <div className="flex">
          {icon && (
            <span className="mr-3">
              {typeof icon === "string" ? (
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    width: 24,
                    height: 24,
                    filter: isActive ? "brightness(0) invert(1)" : "none",
                  }}
                />
              ) : (
                icon
              )}
            </span>
          )}
          {title}
        </div>
        <img
          src={ArrowRight}
          alt="arrowright"
          className="ml-3"
          style={{
            width: 16,
            height: 16,
            filter: isActive ? "brightness(0) invert(3)" : "none",
          }}
        />
      </li>
    </ul>
  );
};

export default DashboardNav;
