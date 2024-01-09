import React, { useState } from "react";
import DrawerItem from "./Components/Sidebar (side-menu) components/DrawerItem";
import Shop from "./Components/Sidebar (side-menu) components/StoreIdentity";
import Payments from "./Pages/Payments/Payments";

import example from "./imgs/Imagestoreimg.png";

import { IoMenu } from "react-icons/io5";

import { GoHome } from "react-icons/go";
import { LuClipboardList } from "react-icons/lu";
import { AiOutlineAppstore } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";
import { PiSpeakerHigh } from "react-icons/pi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdPayments } from "react-icons/md";
import { LuMousePointer2 } from "react-icons/lu";
import { TbDiscount2 } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { MdOutlinePalette } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/GlobalSearchBar";
import Creadits from "./Components/Sidebar (side-menu) components/Creadits";
import Home from "./Pages/Home/Home";

function App() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (title) => {
    setActiveItem(title);
    console.log(activeItem);
  };

  return (
    <Router>
      <div className="App bg-[#fafafa]">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className=" h-[60px] w-screen border-b-2 bg-[#1e2640]  lg:hidden"
            >
              <IoMenu className="h-full ml-4 text-white scale-150" />
            </label>
            <SearchBar isActive={activeItem} />
            <Routes>
              {/* Define your routes and corresponding components here */}
              <Route path="/Payments" element={<Payments />}></Route>
              <Route path="/*" element={<Home />}></Route>
            </Routes>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu relative  w-60 min-h-full bg-[#1e2640] text-base-content">
              <Shop
                shopImg={example}
                shopName={"Nishyan"}
                shopLink={"google.com"}
              />

              {/* Sidebar content here */}
              <li>
                <DrawerItem
                  icon={<GoHome />}
                  title="Home"
                  isActive={activeItem === "Home"}
                  onClick={() => handleItemClick("Home")}
                  to="/"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<LuClipboardList />}
                  title="Orders"
                  isActive={activeItem === "Orders"}
                  onClick={() => handleItemClick("Orders")}
                  to="/orders"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<AiOutlineAppstore />}
                  title="Products"
                  isActive={activeItem === "Products"}
                  onClick={() => handleItemClick("Products")}
                  to="/products"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<FiTruck />}
                  title="Delivery"
                  isActive={activeItem === "Delivery"}
                  onClick={() => handleItemClick("Delivery")}
                  to="/Delivery"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<PiSpeakerHigh />}
                  title="Marketing"
                  isActive={activeItem === "Marketing"}
                  onClick={() => handleItemClick("Marketing")}
                  to="/Marketing"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<TbBrandGoogleAnalytics />}
                  title="Analytics"
                  isActive={activeItem === "Analytics"}
                  onClick={() => handleItemClick("Analytics")}
                  to="/Analytics"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<MdPayments />}
                  title="Payments"
                  isActive={activeItem === "Payments"}
                  onClick={() => handleItemClick("Payments")}
                  to="/Payments"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<LuMousePointer2 />}
                  title="Tools"
                  isActive={activeItem === "Tools"}
                  onClick={() => handleItemClick("Tools")}
                  to="/Tools"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<TbDiscount2 />}
                  title="Discounts"
                  isActive={activeItem === "Discounts"}
                  onClick={() => handleItemClick("Discounts")}
                  to="/Discounts"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<GoPeople />}
                  title="Audience"
                  isActive={activeItem === "Audience"}
                  onClick={() => handleItemClick("Audience")}
                  to="/Audience"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<MdOutlinePalette />}
                  title="Appearance"
                  isActive={activeItem === "Appearance"}
                  onClick={() => handleItemClick("Appearance")}
                  to="/Appearance"
                />
              </li>
              <li>
                <DrawerItem
                  icon={<HiOutlineLightningBolt />}
                  title="Plugins"
                  isActive={activeItem === "Plugins"}
                  onClick={() => handleItemClick("Plugins")}
                  to="/Plugins"
                />
              </li>
              <div className="w-full flex items-center justify-center">
                <Creadits amt={"222.10"} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
