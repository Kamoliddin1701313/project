import React, { useState } from "react";
import group from "../assets/images/group.png";
import {
  HujayraIcon,
  HujayraIcon1,
  HujayraIcon2,
  SendBigIcon,
  SendIcon,
} from "../assets/icons";
import { Link } from "react-router-dom";

function ServiceSection() {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className="w-full bg-[#070706]">
      <div className="mx-auto max-w-[1296px] py-24 xl:py-10 lg:py-5 xl:px-5">
        <div className="flex justify-between items-start my-8 gap-10 xl:gap-5 md:flex-col-reverse">
          <div className="flex-1 flex-col gap-4 text-white">
            <span className="text-[18px] leading-[26px] font-semibold text-[#FF8911]">
              SERVICE
            </span>
            <h3 className="text-[64px] leading-[72px] font-semibold xl:text-[52px] xl:leading-[60px] lg:text-[42px] lg:leading-[50px] md:text-[36px]">
              We Providing Complete Professional IT Services.
            </h3>
            <p className="mt-5 mb-10 xl:my-5">
              Assertively streamline interactive interfaces after value a
              infrastructures. Authoritatively fabricate fully tested
              methodologies before Holistic deliver end-to-end architectures
              rather sound benefits.
            </p>

            <div className="flex items-start gap-5 my-7 lg:my-3">
              <img src={group} alt="group" />
              <div>
                <h5 className="text-[24px] leading-7 font-semibold">
                  Analytical research problem findings
                </h5>
                <p className="text-[14px] my-2 leading-[23px]">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 my-7 lg:my-3">
              <img src={group} alt="group" />
              <div>
                <h5 className="text-[24px] leading-7 font-semibold">
                  Analytical research problem findings
                </h5>
                <p className="text-[14px] my-2 leading-[23px]">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 my-7 lg:my-3">
              <img src={group} alt="group" />
              <div>
                <h5 className="text-[24px] leading-7 font-semibold">
                  Analytical research problem findings
                </h5>
                <p className="text-[14px] my-2 leading-[23px]">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex gap-7 xl:gap-5">
            <div className="flex-col w-full flex items-start gap-10 xl:gap-7">
              <div
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
                className={`px-4 py-8 flex flex-col w-full h-[360px] justify-between rounded-[16px] ${
                  isHovered == 1 ? "bg-[#FF8911]" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center relative">
                  {isHovered == 1 ? (
                    <Link to="/">
                      <SendBigIcon className="right-0 top-0 absolute" />
                    </Link>
                  ) : (
                    <div className="bg-[#1A1D27] rounded-full w-[65px] h-[65px] flex items-center justify-center">
                      <HujayraIcon />
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-[#070706] my-4 text-[24px] leading-7 font-semibold">
                    Network solution
                  </span>
                  <p
                    className={`text-[#1A1D27CC] my-4 lg:my-2 ${
                      isHovered == 1 ? "hidden" : "block"
                    }`}
                  >
                    Assertively streamline interactive interfaces after
                    value-added infrastructures.
                  </p>
                  <Link
                    to="/"
                    className={`flex items-center gap-3 text-[#7F27FF] text-[15px] leading-4 font-medium ${
                      isHovered == 1 && "hidden"
                    }`}
                  >
                    <SendIcon /> LEARN MORE
                  </Link>
                </div>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
                className={`px-4 py-8 flex flex-col w-full h-[360px] justify-between rounded-[16px] ${
                  isHovered == 2 ? "bg-[#FF8911]" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center relative">
                  {isHovered == 2 ? (
                    <Link to="/">
                      <SendBigIcon className="right-0 top-0 absolute" />
                    </Link>
                  ) : (
                    <div className="bg-[#1A1D27] rounded-full w-[65px] h-[65px] flex items-center justify-center">
                      <HujayraIcon1 />
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-[#070706] my-4 text-[24px] leading-7 font-semibold">
                    Cyber security
                  </span>
                  <p
                    className={`text-[#1A1D27CC] my-4 lg:my-2 ${
                      isHovered == 2 ? "hidden" : "block"
                    }`}
                  >
                    Assertively streamline interactive interfaces after
                    value-added infrastructures.
                  </p>
                  <Link
                    to="/"
                    className={`flex items-center gap-3 text-[#7F27FF] text-[15px] leading-4 font-medium ${
                      isHovered == 2 && "hidden"
                    }`}
                  >
                    <SendIcon /> LEARN MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex-col w-full flex items-start gap-10 mt-20 xl:gap-7">
              <div
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
                className={`px-4 py-8 flex flex-col w-full h-[360px] justify-between rounded-[16px] ${
                  isHovered == 3 ? "bg-[#FF8911]" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center relative">
                  {isHovered == 3 ? (
                    <Link to="/">
                      <SendBigIcon className="right-0 top-0 absolute" />
                    </Link>
                  ) : (
                    <div className="bg-[#1A1D27] rounded-full w-[65px] h-[65px] flex items-center justify-center">
                      <HujayraIcon2 />
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-[#070706] my-4 text-[24px] leading-7 font-semibold">
                    Data analytics
                  </span>
                  <p
                    className={`text-[#1A1D27CC] my-4 lg:my-2 ${
                      isHovered == 3 ? "hidden" : "block"
                    }`}
                  >
                    Assertively streamline interactive interfaces after
                    value-added infrastructures.
                  </p>
                  <Link
                    to="/"
                    className={`flex items-center gap-3 text-[#7F27FF] text-[15px] leading-4 font-medium ${
                      isHovered == 3 && "hidden"
                    }`}
                  >
                    <SendIcon /> LEARN MORE
                  </Link>
                </div>
              </div>

              <div
                onMouseEnter={() => handleMouseEnter(4)}
                onMouseLeave={handleMouseLeave}
                className={`px-4 py-8 flex flex-col w-full h-[360px] justify-between rounded-[16px] ${
                  isHovered == 4 ? "bg-[#FF8911]" : "bg-white"
                }`}
              >
                <div className="flex justify-between items-center relative">
                  {isHovered == 4 ? (
                    <Link to="/">
                      <SendBigIcon className="right-0 top-0 absolute" />
                    </Link>
                  ) : (
                    <div className="bg-[#1A1D27] rounded-full w-[65px] h-[65px] flex items-center justify-center">
                      <HujayraIcon />
                    </div>
                  )}
                </div>

                <div>
                  <span className="text-[#070706] my-4 text-[24px] leading-7 font-semibold">
                    View all services
                  </span>
                  <p
                    className={`text-[#1A1D27CC] my-4 lg:my-2 ${
                      isHovered == 4 ? "hidden" : "block"
                    }`}
                  >
                    Assertively streamline interactive interfaces after
                    value-added infrastructures.
                  </p>
                  <Link
                    to="/"
                    className={`flex items-center gap-3 text-[#7F27FF] text-[15px] leading-4 font-medium ${
                      isHovered == 4 && "hidden"
                    }`}
                  >
                    <SendIcon /> LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
