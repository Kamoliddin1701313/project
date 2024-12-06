import React from "react";
import ouremployees from "../assets/images/ouremployees.png";

function GetInTouch() {
  return (
    <div className="max-w-[1296px] mx-auto flex justify-between items-center gap-16 py-24 xl:py-16 xl:px-5 xl:gap-8 lg:gap-4 lg:items-start lg:py-10 md:flex-col">
      <div className="w-3/5 lg:w-1/2 md:w-full">
        <img className="w-full h-full" src={ouremployees} alt="ouremployees" />
      </div>

      <div className="w-2/5 lg:w-1/2 md:w-full">
        <div className="">
          <span className="text-[#7F27FF] text-[18px] leading-[26px] font-semibold">
            GET IN TOUCH
          </span>
          <h3 className="text-[64px] leading-[72px] font-semibold text-[#1A1D27] xl:text-[52px] xl:leading-[60px] lg:text-[38px] lg:leading-[45px]">
            It's very easy to contact!
          </h3>
        </div>
        <form className="flex flex-col gap-4 my-8 lg:my-4">
          <input
            required
            type="text"
            className="p-4 border-[1px] border-[#1A1D2766] outline-none rounded-[4px]"
            placeholder="Your name"
          />
          <input
            required
            type="email"
            className="p-4 border-[1px] border-[#1A1D2766] outline-none rounded-[4px]"
            placeholder="Email address"
          />
          <input
            required
            type="text"
            className="p-4 border-[1px] border-[#1A1D2766] outline-none rounded-[4px]"
            placeholder="Web address"
          />
          <textarea
            className="p-4 resize-none border-[1px] border-[#1A1D2766] outline-none rounded-[4px]"
            name=""
            id=""
            rows={6}
            placeholder="Type message..."
          ></textarea>
          <button className="bg-[#FF8911] text-center p-4 outline-none rounded-[4px] text-[#070706] font-medium leading-4 text-[15px]">
            SEND MESSAGE NOW
          </button>
        </form>
      </div>
    </div>
  );
}

export default GetInTouch;
