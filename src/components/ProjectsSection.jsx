import React, { useState } from "react";
import projectsectionimg1 from "../assets/images/projectsectionimg1.png";
import projectsectionimg2 from "../assets/images/projectsectionimg2.png";
import projectsectionimg3 from "../assets/images/projectsectionimg3.png";
import projectsectionimg4 from "../assets/images/projectsectionimg4.png";
import projectsectionimg5 from "../assets/images/projectsectionimg5.png";
import { SendBigIcon } from "../assets/icons";

function ProjectsSection() {
  const [project, setProject] = useState(null);

  return (
    <div className="bg-[#070706] py-20 xl:py-12">
      <div className="max-w-[1296px] mx-auto xl:px-5">
        <div className="w-1/2 text-white lg:w-4/5 md:w-full">
          <span className="text-[#FF8911] text-[18px] leading-[26px] font-semibold">
            PROJECTS
          </span>
          <h3 className="text-[64px] my-6 leading-[72px] font-semibold lg:text-[52px] lg:my-3 lg:leading-[60px] md:text-[42px] md:leading-[50px]">
            Awesome works for our Clients
          </h3>
          <p>
            Assertively streamline interactive interfaces after value a
            infrastructures. Authoritatively fabricate fully tested
            methodologies before Holistic deliver end-to-end architectures
            rather sound benefits.
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-x-4 mt-10 gap-y-8 lg:gap-y-4 text-white lg:mt-6 md:grid-cols-2">
          <div className={`relative z-10 h-[400px] cursor-pointer`}>
            <div className={`h-[400px]`}>
              <img className="h-[400px]" src={projectsectionimg1} />

              <div
                className={`w-4/5 bg-white p-5 absolute bottom-7 left-[10%]`}
              >
                <div>
                  <span className="text-[#7F27FF] text-[12px] leading-4 font-medium">
                    TECH
                  </span>
                  <h4 className="text-[#1A1D27] text-[24px] leading-[26px] font-extrabold my-2 md:my-0 md:text-[20px] md:leading-6">
                    Tech Cover Industry
                  </h4>
                  <p className="text-[#1A1D27CC] md:leading-5">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-[400px] cursor-pointer`}>
            <div className={`h-[400px]`}>
              <img className="h-[400px] z-10" src={projectsectionimg2} />

              <div
                className={`w-4/5 bg-white p-5 absolute bottom-7 left-[10%]`}
              >
                <div>
                  <span className="text-[#7F27FF] text-[12px] leading-4 font-medium">
                    TECH
                  </span>
                  <h4 className="text-[#1A1D27] text-[24px] leading-[26px] font-extrabold my-2 md:my-0 md:text-[20px] md:leading-6">
                    Tech Cover Industry
                  </h4>
                  <p className="text-[#1A1D27CC] md:leading-5">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-[400px] cursor-pointer`}>
            <div className={`h-[400px]`}>
              <img className="h-[400px]" src={projectsectionimg3} />

              <div
                className={`w-4/5 bg-white p-5 absolute bottom-7 left-[10%]`}
              >
                <div>
                  <span className="text-[#7F27FF] text-[12px] leading-4 font-medium">
                    TECH
                  </span>
                  <h4 className="text-[#1A1D27] text-[24px] leading-[26px] font-extrabold my-2 md:my-0 md:text-[20px] md:leading-6">
                    Tech Cover Industry
                  </h4>
                  <p className="text-[#1A1D27CC] md:leading-5">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-[400px] cursor-pointer`}>
            <div className={`h-[400px]`}>
              <img className="h-[400px]" src={projectsectionimg4} />

              <div
                className={`w-4/5 bg-white p-5 absolute bottom-7 left-[10%]`}
              >
                <div>
                  <span className="text-[#7F27FF] text-[12px] leading-4 font-medium">
                    TECH
                  </span>
                  <h4 className="text-[#1A1D27] text-[24px] leading-[26px] font-extrabold my-2 md:my-0 md:text-[20px] md:leading-6">
                    Tech Cover Industry
                  </h4>
                  <p className="text-[#1A1D27CC] md:leading-5">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-[400px] cursor-pointer`}>
            <div className={`h-[400px]`}>
              <img className="h-[400px]" src={projectsectionimg5} />

              <div
                className={`w-4/5 bg-white p-5 absolute bottom-7 left-[10%]`}
              >
                <div>
                  <span className="text-[#7F27FF] text-[12px] leading-4 font-medium">
                    TECH
                  </span>
                  <h4 className="text-[#1A1D27] text-[24px] leading-[26px] font-extrabold my-2 md:my-0 md:text-[20px] md:leading-6">
                    Tech Cover Industry
                  </h4>
                  <p className="text-[#1A1D27CC] md:leading-5">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative h-[400px] cursor-pointer`}>
            <div className={`h-[400px]`}>
              <img className="h-[400px]" src={projectsectionimg1} />

              <div
                className={`w-4/5 bg-white p-5 absolute bottom-7 left-[10%]`}
              >
                <div>
                  <span className="text-[#7F27FF] text-[12px] leading-4 font-medium">
                    TECH
                  </span>
                  <h4 className="text-[#1A1D27] text-[24px] leading-[26px] font-extrabold my-2 md:my-0 md:text-[20px] md:leading-6">
                    Tech Cover Industry
                  </h4>
                  <p className="text-[#1A1D27CC] md:leading-5">
                    There are many variations of passages
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
