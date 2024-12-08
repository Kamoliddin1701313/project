import React from "react";
import logo from "../../assets/images/Logo.png";
import {
  FaceBookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../assets/icons";

function Footer() {
  return (
    <div className="bg-[#070706] py-24 xl:py-16 xl:px-5 md:py-8">
      <div className="max-w-[1296px] mx-auto">
        <div className="grid grid-cols-4 text-white md:grid-cols-2 md:gap-y-8">
          <div className="grid grid-cols-1 gap-y-5 lg:gap-y-[14px] lg:text-[14px] md:text-[16px]">
            <img src={logo} alt="logo" className="h-[30px] mb-2" />
            <a href="">About</a>
            <a href="">Features</a>
            <a href="">Works</a>
            <a href="">Career</a>
          </div>

          <div className="grid grid-cols-1 gap-y-5 lg:gap-y-[14px] lg:text-[14px] md:text-[16px]">
            <p className="mb-2">Help</p>
            <a href="">Customer Support</a>
            <a href="">Delivery Details</a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>

          <div className="grid grid-cols-1 gap-y-5 lg:gap-y-[14px] lg:text-[14px] md:text-[16px]">
            <p className="mb-2">Resources</p>
            <a href="">Free eBooks</a>
            <a href="">Development Tutorial</a>
            <a href="">How to - Blog</a>
            <a href="">YouTube Playlist</a>
          </div>

          <div className="grid grid-cols-1 gap-y-5 lg:gap-y-[14px] lg:text-[14px] md:text-[16px]">
            <p className="mb-2">Extra Links</p>
            <a href="">Customer Support</a>
            <a href="">Delivery Details</a>
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>

        <div className="flex justify-between items-center mt-20 text-white xl:mt-12 lg:flex-col lg:gap-5">
          <div className="flex justify-between items-center gap-16 md:gap-5 sm:flex-col">
            <div className="flex items-center gap-3">
              <a href="#">
                <FaceBookIcon className />
              </a>

              <a href="#">
                <InstagramIcon className />
              </a>

              <a href="#">
                <TwitterIcon className />
              </a>

              <a href="#">
                <YoutubeIcon />
              </a>
            </div>

            <div className="flex items-center justify-between gap-7 md:gap-3">
              <span className="md:text-[16px]">Privacy Policy</span>
              <span className="md:text-[16px]">rms & Conditions </span>
              <span className="md:text-[16px]">Support</span>
            </div>
          </div>

          <p className="md:text-[16px]">
            © Copyright 2024, All Rights Reserved by company
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
