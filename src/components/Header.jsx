import React from "react"
import { useState, useRef, useEffect } from "react";

function Header() {
     const [open, setOpen] = useState(false);
     const dropdownRef = useRef(null); 

     // Close dropdown when clicking outside
    useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    }, []);

    return(
        <div className="container flex text-white px-3 pt-2">
                <img src={`/logo.png`} alt="Logo" className="w-[168px] h-[50px] mt-2 ms-8 hidden md:block"/>
                <img src={`/nsymbol.png`} alt="Logo" className="w-[45px] h-[50px] mt-2 ms-3 block md:hidden"/>
                <div className="container flex items-center justify-end me-2 md:me-18">
                    <div className="relative group" ref={dropdownRef}>
                        <button onClick={() => setOpen(!open)} 
                        className="flex items-center bg-none border border-gray-500 border-[1] text-sm px-3 py-1 ms-5 my-3 rounded-md focus:border-white ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-2 text-white" viewBox="0 0 16 16" fill="currentColor">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"/>
                            </svg>
                                <span className="hidden md:block">English&nbsp;&nbsp;&nbsp;</span>
                                <span className="text-[7px]">▼</span>
                        </button>
                        {open && ( 
                        <div className="absolute right-0 mt-2 w-30 z-50 bg-white border border-gray-300 rounded-sm shadow-lg">
                        <ul className="text-gray-700">
                        <li className="block px-4 py-1 hover:bg-blue-700 hover:text-white cursor-pointer">
                        English
                        </li>
                        <li className="block px-4 py-1 hover:bg-blue-700 hover:text-white cursor-pointer">
                        Espanol
                        </li>
                        </ul>
                        </div>
                        )}
                    </div>
                    <button className="bg-red-600 text-white text-sm px-5 py-1 ms-3 md:mx-3 md:my-3 rounded-md font-semibold hover:bg-red-700 cursor-pointer flex justify-center items-center">Sign In</button>
                </div>

             </div>
)
}
export default Header