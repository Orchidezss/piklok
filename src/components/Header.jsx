"use client";
import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import InputSearch from "./InputSearch";
import Navlists from "./Navlists";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = (e) => {
    e.preventDefault
    setMenu(!menu)
  }
  return (
    <>
      <div className="container h-fit flex z-50 justify-between py-5 bg-background fixed top-0 left-1/2 -translate-x-1/2 items-center">
        <p className="font-saira text-2xl font-black">PIK<span className="text-secondary">LOK.</span></p>
        <Navlists />
        <InputSearch isMobile={false} />
        <button className="text-3xl lg:hidden" onClick={handleMenu}>
          <HiOutlineMenuAlt3 />
        </button>
      </div>

      <div className={`${menu ? "top-[62px]" : "-top-[100%]"} transition-all ease duration-300 container z-40 bg-background fixed left-1/2 -translate-x-1/2 flex flex-col align-center px-2 py-3 gap-y-3`}>
        <Navlists isMenu={true} />
        <InputSearch isMobile={true}/>
      </div>
    </>
  );
};

export default Header;
