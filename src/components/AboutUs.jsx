import React from "react";
import user from "../assets/images/user.png";
import users from "../assets/images/users.png";

function AboutUs() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1296px] py-20 xl:py-10 xl:px-5 md:py-7">
        <h3 className="text-[64px] leading-[72px] font-semibold text-[#1A1D27] xl:text-[56px] xl:leading-[64px] lg:text-[42px] lg:leading-[52px] md:text-center md:text-[38px]">
          Our Company Specialize In IT Solutions & Technology with Passion
        </h3>
        <p className="leading-[24px] text-[#1A1D2799] my-6 xl:my-3 md:text-center">
          Assertively streamline interactive interfaces after value-added
          infrastructures. Authoritatively fabricate fully tested methodologies
          before. Holistic deliver end-to-end architectures rather than
          economically sound benefits. Progressively simplify end-to-end
          paradigms. Assertively streamline interactive interfaces after
          value-added infrastructure.
        </p>
        <div className="flex justify-between items-center my-8 xl:my-4 xl:gap-4 lg:items-start md:flex-col">
          <div className="flex flex-1 gap-4">
            <div className="flex flex-col gap-4">
              <img src={user} alt="user" />
              <div className="font-semibold text-[#070706] bg-[#FF8911] p-5 rounded-[16px]">
                <p className="text-[53px] leading-[46px] xl:text-[48px] lg:text-[36px] lg:leading-[38px]">
                  12+
                </p>
                <p className="text-[20px] leading-6 my-3 lg:my-1">
                  Years Experience
                </p>
              </div>
            </div>

            <div>
              <img src={users} alt="users" className="h-full" />
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-y-6 xl:gap-y-2">
            <h1 className="text-[#1A1D27] leading-7 text-[24px] font-semibold">
              We try to give all kind of technology solution as your
              requirements and we are the best in field.
            </h1>
            <p className="leading-[23px] text-[14px] text-[#1A1D2799]">
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end-to-end architectures
              rather than economically sound benefits. Progressively simplify
              end-to-end paradigms. Assertively streamline interfaces .
            </p>
            <div className="w-full h-[1px] bg-[#FF891199]"></div>
            <h1 className="text-[#1A1D27] leading-7 text-[24px] font-semibold">
              Provide IT services to hundreds of SME customers across a diverse
              range of sectors.
            </h1>
            <p className="leading-[23px] text-[14px] text-[#1A1D2799]">
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end-to-end architectures
              rather than economically sound benefits. Progressively simplify
              end-to-end paradigms. Assertively streamline interfaces .
            </p>
            <button className="text-[15px] leading-4 font-medium tracking-[1px] bg-[#070706] rounded-[6px] h-[56px] w-[242px] text-white xl:w-[200px] xl:h-[42px] md:mx-auto">
              MORE ABOUT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
