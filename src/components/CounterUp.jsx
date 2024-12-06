import React from "react";

function CounterUp() {
  return (
    <div className="bg-[#070706] py-10 w-full">
      <div className="max-w-[1296px] mx-auto flex items-center justify-between xl:px-5">
        <div>
          <h1 className="text-[#FF8911] text-[64px] mb-4 leading-[72px] font-semibold lg:text-[52px] lg:leading-[52px] md:text-[36px] md:leading-[38px] md:mb-0">
            98%
          </h1>
          <p className="text-white leading-6 text-[18px] font-semibold md:text-[14px]">
            Automatic payment
          </p>
        </div>

        <div>
          <h1 className="text-[#FF8911] text-[64px] mb-4 leading-[72px] font-semibold lg:text-[52px] lg:leading-[52px] md:text-[36px] md:leading-[38px] md:mb-0">
            100k+
          </h1>
          <p className="text-white leading-6 text-[18px] font-semibold md:text-[14px]">
            New users per week
          </p>
        </div>

        <div>
          <h1 className="text-[#FF8911] text-[64px] mb-4 leading-[72px] font-semibold lg:text-[52px] lg:leading-[52px] md:text-[36px] md:leading-[38px] md:mb-0">
            110k+
          </h1>
          <p className="text-white leading-6 text-[18px] font-semibold md:text-[14px]">
            Monthly active users
          </p>
        </div>

        <div>
          <h1 className="text-[#FF8911] text-[64px] mb-4 leading-[72px] font-semibold lg:text-[52px] lg:leading-[52px] md:text-[36px] md:leading-[38px] md:mb-0">
            33%
          </h1>
          <p className="text-white leading-6 text-[18px] font-semibold md:text-[14px]">
            Growth-over-year
          </p>
        </div>
      </div>
    </div>
  );
}

export default CounterUp;
