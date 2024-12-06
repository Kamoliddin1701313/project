import React, { useState } from "react";
import chooseImg from "../assets/images/chooseImg.png";
import { IoIosArrowDown } from "react-icons/io";
import whychooseimg1 from "../assets/images/whychooseimg1.png";
import whychooseimg2 from "../assets/images/whychooseimg2.png";
import whychooseimg3 from "../assets/images/whychooseimg3.png";
import whychooseimg4 from "../assets/images/whychooseimg4.png";

function WhyChooseUs() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div>
      <div className="max-w-[1296px] mx-auto py-20 xl:py-12 xl:px-5">
        <div className="flex justify-between items-center gap-16 xl:gap-10 xl:items-start lg:gap-5 md:flex-col-reverse">
          <div className="flex-1">
            <img src={chooseImg} alt="chooseImg" />
          </div>

          <div className="flex-1">
            <span className="text-[#7F27FF] text-[18px] leading-[26px] font-semibold">
              Why choose us
            </span>
            <h3 className="text-[#1A1D27] text-[64px] leading-[72px] font-semibold xl:text-[48px] xl:leading-[60px] lg:text-[38px] lg:leading-[52px]">
              Proven Expertise in Complex IT Solutions
            </h3>
            <p className="text-[#1A1D2799] leading-6 my-5 xl:my-2">
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end-to-end architectures
              rather than economically sound benefits. Progressively simplify
              end-to-end paradigms. Assertively streamline interactive
              interfaces after value-added infrastructure.
            </p>

            <div className="my-5 ">
              <div className="flex justify-between items-center">
                <p className="text-[#1A1D27] text-[24px] leading-7 font-semibold">
                  An Award winning company
                </p>
                <IoIosArrowDown
                  onClick={() => toggleAccordion(1)}
                  className={`cursor-pointer duration-300 ${
                    activeAccordion == 1 && "transform rotate-180 transition"
                  }`}
                />
              </div>

              {activeAccordion == 1 && (
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  delectus error repellendus.
                </p>
              )}
            </div>

            <div className="my-10 w-full h-[1px] bg-[#FF891199] xl:my-3"></div>

            <div className="my-5 ">
              <div className="flex justify-between items-center">
                <p className="text-[#1A1D27] text-[24px] leading-7 font-semibold">
                  Quick Research and Solutions
                </p>
                <IoIosArrowDown
                  onClick={() => toggleAccordion(2)}
                  className={`cursor-pointer duration-300 ${
                    activeAccordion == 2 && "transform rotate-180 transition"
                  }`}
                />
              </div>

              {activeAccordion == 2 && (
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  delectus error repellendus.
                </p>
              )}
            </div>

            <div className="my-10 w-full h-[1px] bg-[#FF891199] xl:my-3"></div>

            <div className="my-5">
              <div className="flex justify-between items-center">
                <p className="text-[#1A1D27] text-[24px] leading-7 font-semibold">
                  Dedicated Support 24/7
                </p>
                <IoIosArrowDown
                  onClick={() => toggleAccordion(3)}
                  className={`cursor-pointer duration-300 ${
                    activeAccordion == 3 && "transform rotate-180 transition"
                  }`}
                />
              </div>

              {activeAccordion == 3 && (
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  delectus error repellendus.
                </p>
              )}
            </div>

            <div className="my-10 w-full h-[1px] bg-[#FF891199] xl:my-3"></div>

            <div className="my-5">
              <div className="flex justify-between items-center">
                <p className="text-[#1A1D27] text-[24px] leading-7 font-semibold">
                  Quick Support & Tech Solution
                </p>
                <IoIosArrowDown
                  onClick={() => toggleAccordion(4)}
                  className={`cursor-pointer duration-300 ${
                    activeAccordion == 4 && "transform rotate-180 transition"
                  }`}
                />
              </div>

              {activeAccordion == 4 && (
                <p className="mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  delectus error repellendus.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 xl:mt-8 lg:mt-4 md:mt-8">
          <h5 className="text-[#1A1D27] text-[32px] leading-10 font-semibold lg:text-[28px]">
            Ready To Transform Your Business?
          </h5>

          <div className="grid grid-cols-2 grid-rows-2 gap-6 my-10 lg:mt-6 lg:mb-0 lg:gap-3 md:grid-cols-1 md:gap-y-6">
            <div className="flex gap-5 lg:gap-3">
              <img
                className="w-[100px] h-[100px] rounded-[6px]"
                src={whychooseimg1}
                alt="whychooseimg1"
              />
              <div>
                <h6 className="text-[24px] leading-7 font-semibold text-[#1A1D27]">
                  Tech Solution
                </h6>
                <p className="text-[14px] leading-[23px] text-[#1A1D27CC] mt-2">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before. Holistic deliver end sound
                  benefits.
                </p>
              </div>
            </div>

            <div className="flex gap-5 lg:gap-3">
              <img
                className="w-[100px] h-[100px] rounded-[6px]"
                src={whychooseimg2}
                alt="whychooseimg1"
              />
              <div>
                <h6 className="text-[24px] leading-7 font-semibold text-[#1A1D27]">
                  Quick Support
                </h6>
                <p className="text-[14px] leading-[23px] text-[#1A1D27CC] mt-2">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before. Holistic deliver end sound
                  benefits.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                className="w-[100px] h-[100px] rounded-[6px]"
                src={whychooseimg3}
                alt="whychooseimg1"
              />
              <div>
                <h6 className="text-[24px] leading-7 font-semibold text-[#1A1D27]">
                  IT Project Solution
                </h6>
                <p className="text-[14px] leading-[23px] text-[#1A1D27CC] mt-2">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before. Holistic deliver end sound
                  benefits.
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <img
                className="w-[100px] h-[100px] rounded-[6px]"
                src={whychooseimg4}
                alt="whychooseimg1"
              />
              <div>
                <h6 className="text-[24px] leading-7 font-semibold text-[#1A1D27]">
                  Solving IT Challenges
                </h6>
                <p className="text-[14px] leading-[23px] text-[#1A1D27CC] mt-2">
                  Assertively streamline interactive interfaces after
                  value-added infrastructures. Authoritatively fabricate fully
                  tested methodologies before. Holistic deliver end sound
                  benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
