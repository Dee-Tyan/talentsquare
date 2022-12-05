import React from "react";
import { NavLink } from "react-router-dom";
import welcome from "../../assets/welcome.svg";
import compliance from "../../assets/compliance.svg";
import overview from "../../assets/overview.svg";
import products from "../../assets/products.svg";
import orders from "../../assets/orders.svg";
import customers from "../../assets/customers.svg";
import wallets from "../../assets/wallets.svg";
import transactions from "../../assets/transactions.svg";
import va from "../../assets/va.svg";
import live from "../../assets/live.svg";
import settings from "../../assets/settings.svg";
import audit from "../../assets/audit.svg";



const SideNav = () => {
  return (
    <div className="bg-white w-52 h-screen overflow-y-scroll fixed top-20 bottom-0 z-50">
      <div className="pt-4 mb-36">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={welcome} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={compliance} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={overview} />
              </NavLink>
            </li>
            
            <h3 className="uppercase py-4 pl-4 lg:pl-8 pr-2 font-bold"> Business</h3>
            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={products} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={customers} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={orders} />
              </NavLink>
            </li>
            <h3 className="uppercase py-4 pl-4 lg:pl-8 pr-2 font-bold"> Payments</h3>
            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={wallets} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={transactions} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={va} />
                
              </NavLink>
            </li>
            <p className="text-green text-xs text-center"> New</p>
            
          </ul>
        </nav>
      </div>
      
      <hr />
      <div className="mb-8">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={live} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={settings} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="group flex gap-4 lg:gap-6 items-center py-2 pl-4 lg:pl-8 pr-2 border-l-3 border-transparent transition ease-out duration-500 select-none hover:bg-lgray hover:bg-opacity-8 hover:border-lavender"
              >
                <img src={audit} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
