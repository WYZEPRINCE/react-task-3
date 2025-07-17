import React from 'react'
import { useState } from 'react';
import "../dashboard/Dashboard.scss";
import DashboardNav from "../../components/DasboardNav";
import KeySquare from "../../assets/images/key-square.png";
import { Outlet } from 'react-router-dom';
import Settings from "../../assets/images/setting.png"
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
import CustomerTable from '../../components/CustomerTable';
import Pagination from '../../components/Pagination';
import { useLocation } from 'react-router-dom';

const DashboardOverview = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-[#f3f5ff] h-full flex ">
      {/* Nav LiNK */}
      <div className="flex flex-col gap-4 bg-[#fff] w-fit p-4 shadow-sm">
        <div className="flex gap-2 place-items-center">
          <img src={Settings} width={37} alt="dashboardlogo" />
          <h2 className="font-bold text-[26px] ">Dashboard</h2>
          <p className="text-[#838383] text-[10px] place-self-end ">v.01</p>
        </div>
        <DashboardNav title="Dashboard" to="/dashboard/home" icon={KeySquare} />
        <DashboardNav
          title="Products"
          to="/dashboard"
          icon={ProductSquare}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <DashboardNav
          title="Customers"
          to="/dashboard"
          icon={UserSquare}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <DashboardNav
          title="Income"
          to="/dashboard/"
          icon={WalletMoney}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />
        <DashboardNav title="Promote" to="/dashboard/reports" icon={Discount} />
        <DashboardNav
          title="Help"
          to="/dashboard/"
          icon={MessageQuestion}
          activeLink={activeLink}
          handleLinkClick={handleLinkClick}
        />

        {/* Get Pro */}

        <div className="p-5 my-5 mx-3 mt-60 rounded-xl bg-[linear-gradient(150deg,#EAABF0_25%,#4623E9_87%)] flex align-center justify-center text-white font-semibold text-[16px] flex-col gap-5 w-[230px] ">
          <p className="text-[14px] text-center font-bold ">
            Upgrade to PRO to get access all Features!
          </p>
          <button className="button2"> Get Pro Now</button>
        </div>

        {/* Menu User Section */}
        <div className="flex place-items-center gap-9 mb-10">
          <div className="flex gap-2 justify-start  mx-4">
            <img src={UserPics} width={42} alt="" />
            <span className="flex flex-col text-sm">
              Evano<p className="text-[#757575]">Project Manager</p>
            </span>
          </div>
          <img className="size-6 rotate-90" src={ArrowRight} alt="" />
        </div>
      </div>
      <Outlet />

      {/* Search Input & greetings */}
      <div className="flex flex-col gap-8 mx-10 my-10 w-[100%] overflow-x-auto">
        <div className=" container3  ">
          <div>
            <p className="text-[24px] font-medium">Hello Evano 👋🏼,</p>
          </div>
          <div class="relative">
            <input
              type="search"
              className=" bg-white pl-10 pr-4 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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

        <div className="container1 shadow-sm ">
          {/* Total Customers */}

          <div className="flex place-items-center gap-5">
            <img
              className="bg-[#D3FFE7] size-15 px-3 py-4 rounded-full"
              src={TwoUser}
              alt=""
            />
            <div>
              <p>Total Customers</p>
              <p>5,423</p>
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
              <p>5,423</p>
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
              <p>Avtive Now</p>
              <p>5,423</p>
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
              <div className=" container3 flex  ">
                <div>
                  <p className="text-[20px] font-medium">All Customers</p>
                </div>

                <div className="flex gap-4 ">
                  <div class="relative">
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
                      className="absolute border-none left-25 top-2 font-semibold"
                      name="Typeofcustomer"
                      id="cutomertype"
                    >
                      <option className="font-bold" value="Newest">
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

              {/* Pagination */}
              <div className="flex justify-between place-items-center">
                <p className="text-[#B5B7C0] text-[14px]">
                  Showing data 1 to 8 of 256K entries
                </p>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview