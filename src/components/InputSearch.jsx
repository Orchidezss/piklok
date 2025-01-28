"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";

const InputSearch = ({isMobile}) => {
    const search = useRef()
    const router = useRouter()
    const searchHandle = (e) => {
        e.preventDefault
        const keyword = search.current.value
        router.push(`/search/${keyword}`)
    }

    const searchEnter = (e) => {
      e.preventDefault
      const keyword = search.current.value
      if(e.key === "Enter") {
        router.push(`/search/${keyword}`)
      }
    }

  return (
    <div className={`${isMobile ? "flex md:hidden" : "md:flex hidden"} align-center bg-text p-1 text-black rounded`}>
      <input type="text" name="search" id="" placeholder="Search your movies" className={`${isMobile ? "w-full border-0 bg-text px-2" : "border-0 bg-text px-2"}`} ref={search} onKeyDown={searchEnter}/>
      <button className="text-background text-xl" onClick={searchHandle}>
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default InputSearch;
