import React from "react";
import BG from "../assets/images/BG.png";
import image from "../assets/images/Image.png";
import { VscPlayCircle } from "react-icons/vsc";

function HeroSection() {
  return (
    <div
      className="w-full bg-red-500 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div className="flex items-center xl:px-5 justify-between max-w-[1296px] mx-auto py-20 lg:py-10 md:flex-col md:py-5 md:gap-y-7">
        <div className="flex-1 md:text-center">
          <p className="text-[#7F27FF] flex items-center gap-3 text-[18px] leading-[26px] font-semibold md:justify-center">
            <span className="w-[45px] h-[1px] bg-[#7F27FF] xl:w-[35px]"></span>
            <span className="xl:text-[16px]"> WELCOME TO Ztech!</span>
          </p>
          <h1 className="text-[#1A1D27] leading-[88px] text-[80px] font-semibold capitalize xl:text-[64px] xl:leading-[72px] lg:text-[48px] lg:leading-[56px]">
            we are ready <br /> to provide <br /> it solution
          </h1>
          <p className="text-[#1A1D27CC] my-6 xl:my-3 xl:text-[14px] lg:my-1 lg:text-[12px] md:text-[14px]">
            Assertively streamline interactive interfaces after value
            infrastructures. untorn datively fabricate fully tested
            methodologies before Assertively streamline interactive interfaces
            after infrastructures. We are 100+ professional software .
          </p>
          <div className="flex gap-5 items-center lg:gap-3 md:mt-0 lg:mt-3 md:justify-center">
            <button className="text-[15px] leading-4 font-medium tracking-[1px] bg-[#070706] rounded-[6px] h-[56px] w-[242px] text-white xl:w-[200px] xl:h-[42px] xl:text-[13px] lg:w-[160px] lg:text-[12px]">
              EXPLORE SERVICES
            </button>
            <button className="flex items-center gap-2 text-[15px] leading-4 font-medium tracking-[1px]">
              <VscPlayCircle className="text-[40px] text-[#FF8911] xl:w-[35px] xl:h-[35px] lg:w-[30px] lg:h-[30px]" />
              Watch A Video
            </button>
          </div>
        </div>

        <div className="flex-1 md:w-4/5">
          <img src={image} alt="image" className="md:h-[350px] md:w-full" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
