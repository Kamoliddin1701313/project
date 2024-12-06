import React from "react";
import { SendIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import blogsectionimg1 from "../assets/images/blogsectionimg1.png";
import blogsectionimg2 from "../assets/images/blogsectionimg2.png";
import blogsectionimg3 from "../assets/images/blogsectionimg3.png";

function BlogSection() {
  return (
    <div className="bg-[#070706] py-20 xl:py-16 xl:px-5 lg:py-8">
      <div className="max-w-[1296px] mx-auto">
        <div className="flex justify-between items-end md:flex-col">
          <div className="w-3/5 text-white lg:w-4/5 md:w-full">
            <span className="text-[#FF8911] text-[18px] leading-[26px] font-semibold">
              OUR LATEST BLOG
            </span>
            <h3 className="text-[64px] leading-[72px] font-semibold xl:text-[52px] xl:leading-[60px] lg:text-[42px] lg:leading-[50px] md:text-[36px] md:leading-[42px]">
              Our latest experience
            </h3>
            <p className="my-5 lg:my-3">
              Assertively streamline interactive interfaces after value a
              infrastructures. Authoritatively fabricate fully tested
              methodologies before Holistic deliver end-to-end architectures
              rather sound benefits.
            </p>
          </div>

          <Link to="/" className="flex items-center gap-[6px] text-[#FF8911]">
            <SendIcon className /> VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-5 my-12 xl:my-6 md:grid-cols-2">
          <div className="text-white">
            <img
              src={blogsectionimg1}
              alt="blogsectionimg1"
              className="mb-5 lg:mb-3"
            />
            <span className="text-[#FF8911] text-[12px] font-medium leading-4">
              November 21, 2022- Tom Black
            </span>
            <h6 className="text-[24px] leading-7 font-semibold my-4 lg:my-2 lg:text-[20px]">
              Plan Your Project with Your Software
            </h6>
            <p>
              It is a time tracking solution that helps employees track hours
              across multiple tasks and projects software.
            </p>
          </div>

          <div className="text-white">
            <img
              src={blogsectionimg2}
              alt="blogsectionimg1"
              className="mb-5 lg:mb-3"
            />
            <span className="text-[#FF8911] text-[12px] font-medium leading-4">
              November 21, 2022- Tom Black
            </span>
            <h6 className="text-[24px] leading-7 font-semibold my-4 lg:my-2 lg:text-[20px]">
              You have a Great Business Idea?
            </h6>
            <p>
              It is a time tracking solution that helps employees track hours
              across multiple tasks and projects software.
            </p>
          </div>

          <div className="text-white">
            <img
              src={blogsectionimg3}
              alt="blogsectionimg1"
              className="mb-5 lg:mb-3"
            />
            <span className="text-[#FF8911] text-[12px] font-medium leading-4">
              November 21, 2022- Tom Black
            </span>
            <h6 className="text-[24px] leading-7 font-semibold my-4 lg:my-2 lg:text-[20px]">
              Building Data Analytics Software
            </h6>
            <p>
              It is a time tracking solution that helps employees track hours
              across multiple tasks and projects software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
