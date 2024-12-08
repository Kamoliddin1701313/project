import React from "react";
import { Link } from "react-router-dom";
import {
  FaceBookIcon,
  InstagramIcon,
  SendIcon,
  TwitterIcon,
} from "../assets/icons";
import teamperson1 from "../assets/images/teamperson1.png";
import teamperson2 from "../assets/images/teamperson2.png";
import teamperson3 from "../assets/images/teamperson3.png";
import teamperson4 from "../assets/images/teamperson4.png";

function TeamSection() {
  return (
    <div>
      <div className="max-w-[1296px] mx-auto py-20 xl:py-12 xl:px-5 md:py-8">
        <div className="flex justify-between items-end">
          <div className="w-1/2 lg:w-3/4 sm:w-3/5">
            <span className="text-[#7F27FF] text-[18px] leading-[26px] font-semibold">
              OUR TEAM
            </span>
            <h3 className="text-[64px] leading-[72px] font-semibold text-[#1A1D27] xl:text-[52px] xl:leading-[60px] lg:text-[38px] lg:leading-[45px] md:text-[32px] md:leading-8 sm:text-[28px]">
              Our Professional Team member
            </h3>
          </div>

          <Link
            to="/"
            className="flex items-center gap-[6px] text-[#FF8911] md:text-[14px] sm:text-[12px]"
          >
            <SendIcon className /> VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-3 mt-14 xl:mt-6 md:grid-cols-2 md:gap-y-5">
          <div>
            <div className="relative">
              <img
                src={teamperson1}
                alt="teamperson1"
                className="bg-black rounded-[10px]"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-6 sm:left-4">
                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <FaceBookIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <h6 className="text-[#1A1D27] mt-5 text-[24px] font-semibold leading-7 lg:mt-2 lg:leading-6 sm:text-[20px] sm:leading-5">
              Eleanor Pena
            </h6>
            <p className="text-[#1A1D2799] mt-1 leading-6">Senior Developer</p>
          </div>

          <div>
            <div className="relative">
              <img
                src={teamperson2}
                alt="teamperson1"
                className="bg-black rounded-[10px]"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-6 sm:left-4">
                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <FaceBookIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <h6 className="text-[#1A1D27] mt-5 text-[24px] font-semibold leading-7 lg:mt-2 lg:leading-6 sm:text-[20px] sm:leading-5">
              Ralph Edwards
            </h6>
            <p className="text-[#1A1D2799] mt-1 leading-6">Senior Developer</p>
          </div>

          <div>
            <div className="relative">
              <img
                src={teamperson3}
                alt="teamperson1"
                className="bg-black rounded-[10px]"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-6 sm:left-4">
                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <FaceBookIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <h6 className="text-[#1A1D27] mt-5 text-[24px] font-semibold leading-7 lg:mt-2 lg:leading-6 sm:text-[20px] sm:leading-5">
              Albert Flores
            </h6>
            <p className="text-[#1A1D2799] mt-1 leading-6">Senior Developer</p>
          </div>

          <div>
            <div className="relative">
              <img
                src={teamperson4}
                alt="teamperson1"
                className="bg-black rounded-[10px]"
              />
              <div className="flex items-center gap-2 absolute bottom-5 left-6 sm:left-4">
                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <FaceBookIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center bg-[#FF8911] w-[35px] rounded-full h-[35px]"
                >
                  <TwitterIcon />
                </a>
              </div>
            </div>
            <h6 className="text-[#1A1D27] mt-5 text-[24px] font-semibold leading-7 lg:mt-2 lg:leading-6 sm:text-[20px] sm:leading-5">
              Jerome Bell
            </h6>
            <p className="text-[#1A1D2799] mt-1 leading-6">Senior Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSection;
