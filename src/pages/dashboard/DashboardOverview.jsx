import React from "react";
import { useState, useEffect } from "react";
import "../dashboard/Dashboard.scss";
import DashboardNav from "../../components/DashboardNav";
import KeySquare from "../../assets/images/key-square.png";
import { Outlet } from "react-router-dom";
import Settings from "../../assets/images/setting.png";
import UserPics from "../../assets/images/userPics.png";
import ArrowRight from "../../assets/images/arrowRight.png";
import ProductSquare from "../../assets/images/3d-square.png";
import MessageQuestion from "../../assets/images/message-question.png";
import WalletMoney from "../../assets/images/wallet-money.png";
import UserSquare from "../../assets/images/user-square.png";
import Discount from "../../assets/images/discount-shape.png";
import Search from "../../assets/images/IconSearch.png";
import TwoUser from "../../assets/images/profile-2user.png";
import ProfileTick from "../../assets/images/profile-tick.png";
import Monitor from "../../assets/images/monitor.png";
import Elipse1 from "../../assets/images/Ellipse-58.png";
import Elipse2 from "../../assets/images/Ellipse-59.png";
import Elipse3 from "../../assets/images/Ellipse-60.png";
import Elipse4 from "../../assets/images/Ellipse-61.png";
import Elipse5 from "../../assets/images/Ellipse-62.png";
import CustomerTable from "../../components/CustomerTable";
import Pagination from "../../components/Pagination";

const DashboardOverview = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeLink, setActiveLink] = useState("/dashboard/DashboardOverview");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="bg-[#f3f5ff] h-full flex  ">
      {/* Sidebar */}
      <div
        className={`
        flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out 
        ${isCollapsed ? "w-20" : "w-72"}
      `}
      >
        {/* Header */}
        <div
          className={`flex items-center p-4 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div
            className={`flex items-center gap-2 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img
              src={Settings}
              width={37}
              alt="dashboard logo"
              className="flex-shrink-0"
            />
            {!isCollapsed && (
              <>
                <h2 className="font-bold text-2xl">Dashboard</h2>
                <p className="text-[#838383] text-xs self-end ml-1">v.01</p>
              </>
            )}
          {!isCollapsed && (
            <img src={ArrowRight} alt=""onClick={toggleSidebar}
            className="mx-2 p-3 hover:bg-gray-100 rounded transition-colors w-12 place-items-center" />
          )}
          </div>
        </div>

        {/* Collapsed toggle button */}
        {isCollapsed && (
          <img src={ArrowRight} alt="" onClick={toggleSidebar}
            className="mx-auto mb-4 p-2 hover:bg-gray-100 rounded transition-colors w-12"/>
        )}

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            <DashboardNav
              title="Dashboard"
              to="/dashboard/home"
              icon={KeySquare}
              isCollapsed={isCollapsed}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
            />
            <DashboardNav
              title="Products"
              to="/dashboard/products"
              icon={ProductSquare}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              isCollapsed={isCollapsed}
            />
            <DashboardNav
              title="Customers"
              to="/dashboard/customers"
              icon={UserSquare}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              isCollapsed={isCollapsed}
            />
            <DashboardNav
              title="Income"
              to="/dashboard/income"
              icon={WalletMoney}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              isCollapsed={isCollapsed}
            />
            <DashboardNav
              title="Promote"
              to="/dashboard/promote"
              icon={Discount}
              isCollapsed={isCollapsed}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
            />
            <DashboardNav
              title="Help"
              to="/dashboard/help"
              icon={MessageQuestion}
              activeLink={activeLink}
              handleLinkClick={handleLinkClick}
              isCollapsed={isCollapsed}
            />
          </ul>
        </nav>

        {/* Get Pro Section */}
        {!isCollapsed && (
          <div className="p-5 m-3 mt-auto mb-4 rounded-xl bg-gradient-to-br from-[#EAABF0] to-[#4623E9] text-white">
            <p className="text-sm text-center font-bold mb-4">
              Upgrade to PRO to get access all Features!
            </p>
            <button className=" button2 w-full py-2 bg-white bg-opacity-20 rounded-lg font-semibold hover:bg-opacity-30 transition-colors">
              Get Pro Now
            </button>
          </div>
        )}

        {/* User Section */}
        <div
          className={`flex items-center p-4 border-t border-gray-100 ${
            isCollapsed ? "justify-center" : "justify-between"
          }`}
        >
          <div
            className={`flex items-center gap-3 ${
              isCollapsed ? "justify-center" : ""
            }`}
          >
            <img
              src={UserPics}
              width={42}
              alt="user"
              className="rounded-full flex-shrink-0"
            />
            {!isCollapsed && (
              <div className="flex flex-col text-sm">
                <span className="font-medium">Evano</span>
                <span className="text-[#757575] text-xs">Project Manager</span>
              </div>
            )}
          </div>
          {!isCollapsed && (
            <img className="w-4 h-4 rotate-90" src={ArrowRight} alt="expand" />
          )}
        </div>
      </div>

      {/* Search Input & greetings */}
      <div className="flex flex-col gap-8 mx-5 my-10 w-full overflow-x-auto">
        <div className="container3 sm:w-4 ">
          <div>
            <p className="text-[24px] font-medium">Hello Evano 👋🏼,</p>
          </div>
          <div class="relative">
            <input
              type="search"
              className=" bg-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm sm:w-auto"
              placeholder="Search"
            />
            <img
              className="absolute left-3 top-2.5"
              src={Search}
              width={24}
              alt=""
            />
          </div>
        </div>

        <div className="container1 shadow-sm  ">
          {/* Total Customers */}

          <div className="flex place-items-center gap-5">
            <img
              className="bg-[#D3FFE7] size-15 px-3 py-4 rounded-full"
              src={TwoUser}
              alt=""
            />
            <div>
              <p>Total Customers</p>
              <p className="font-bold text-2xl">5,423</p>
              <span className="flex text-green-700 font-semibold">
                ↑ 16%<p> this month</p>
              </span>
            </div>
          </div>

          {/* Members */}

          <div className="flex gap-5 place-items-center">
            <img
              className="bg-[#D3FFE7] size-15 px-3 py-4 rounded-full"
              src={ProfileTick}
              alt=""
            />
            <div>
              <p>Members</p>
              <p className="font-bold text-2xl">1,893</p>
              <span className="flex text-red-700 font-semibold">
                ↓ 1% <p> this month</p>
              </span>
            </div>
          </div>

          {/*Active Now  */}

          <div className="flex gap-5 place-items-center">
            <img
              className="bg-[#D3FFE7] size-15 px-3 py-3 rounded-full"
              src={Monitor}
              alt=""
            />
            <div>
              <p>Active Now</p>
              <p className="font-bold text-2xl">189</p>
              {/* Active now avatars */}
              <div className="flex flex-row space-x-[-8px]">
                <img src={Elipse1} width={26} alt="avartar" />
                <img src={Elipse2} width={26} alt="avartar" />
                <img src={Elipse3} width={26} alt="avartar" />
                <img src={Elipse4} width={26} alt="avartar" />
                <img src={Elipse5} width={26} alt="avartar" />
              </div>
            </div>
          </div>
        </div>

        {/* All Customet table schema */}

        <div className="container2">
          <div>
            <div className="flex flex-col gap-5">
              <div className=" md:flex flex-row justify-between sm:flex flex-col space-y-2">
                <div>
                  <p className="text-[20px] font-medium">All Customers</p>
                </div>
                {/* All Customer */}
                <div className=" md:flex flex-row gap-4 sm:flex flex-col space-y-3 ">
                  <div className="relative">
                    <input
                      type="search"
                      className=" bg-[#f5f9ff] pl-10 pr-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                      placeholder="Search"
                    />
                    <img
                      className="absolute left-3 top-2.5"
                      src={Search}
                      width={24}
                      alt=""
                    />
                  </div>

                  <div class="relative">
                    <input
                      type="search"
                      className=" bg-[#f5f9ff] pl-10 pr-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm w-50"
                      placeholder="sort by :"
                    />

                    <select
                      className="absolute border-none left-25 top-2 font-semibold "
                      name="Typeofcustomer"
                      id="customertype"
                    >
                      <option className="font-bold sm:font-normal" value="Newest">
                        Newest
                      </option>
                      <option value="Oldest">Oldest</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>
              <p className="text-green-600">Active Members</p>
              <CustomerTable />

            </div>
              {/* Pagination */}
              <div className="flex justify-between place-items-center mt-4 ">
                <p className="text-[#B5B7C0] text-[14px]">
                  Showing data 1 to 8 of 256K entries
                </p>
                <Pagination />
              </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardOverview;
