import React, { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { HiBars3 } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-24 bg-[#070706] fixed w-full top-0">
      <header className="max-w-[1296px] mx-auto z-50 flex mt-6 items-center justify-between text-white xl:px-5">
        <img src={logo} alt="logo" />
        <nav>
          <ul className="flex md:hidden items-center justify-between gap-10 lg:gap-7">
            <li>
              <Link
                to="/"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                to="/pages"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                PAGES
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                CONTACT
              </Link>
            </li>

            <li>
              <a href="tel:+49309846565" className="flex items-center gap-1">
                <span>
                  <LuPhoneCall className="text-[20px] lg:text-[18px]" />
                </span>
                <span className="font-semibold text-[18px] leading-[26px] lg:text-[14px]">
                  +49309846565
                </span>
              </a>
            </li>
          </ul>

          <ul
            className={`grid grid-cols-1 absolute z-30 duration-300 ease-in-out ${
              toggle ? "top-24" : "-top-[600px]"
            } pl-[6%] py-10 h-[600px] left-0 w-full bg-black`}
          >
            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                home
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/services"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                SERVICES
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/pages"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                PAGES
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/blog"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                BLOG
              </Link>
            </li>

            <li>
              <Link
                onClick={() => setToggle(false)}
                to="/contact"
                className="text-[16px] leading-6 font-normal uppercase lg:text-[13px]"
              >
                CONTACT
              </Link>
            </li>

            <li>
              <a
                onClick={() => setToggle(false)}
                href="tel:+49309846565"
                className="flex items-center gap-1"
              >
                <span>
                  <LuPhoneCall className="text-[20px] lg:text-[18px]" />
                </span>
                <span className="font-semibold text-[18px] leading-[26px] lg:text-[14px]">
                  +49309846565
                </span>
              </a>
            </li>
            
          </ul>

          <ul>
            <li className="hidden md:block">
              {toggle ? (
                <IoCloseSharp
                  onClick={() => setToggle(false)}
                  className="text-[45px] cursor-pointer"
                />
              ) : (
                <HiBars3
                  onClick={() => setToggle(true)}
                  className="text-[45px] cursor-pointer"
                />
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
