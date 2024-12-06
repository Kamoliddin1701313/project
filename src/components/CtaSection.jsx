import React, { useState } from "react";
import { Button, Modal } from "antd";

function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-[460px] bg-yellow-700 flex items-center justify-center xl:h-[380px] md:h-[300px]">
      <div className="text-white text-center mx-auto max-w-[796px] lg:px-5">
        <h1 className="text-[64px] leading-[72px] font-semibold lg:text-[52px] lg:leading-[60px] md:text-[42px] md:leading-[52px]">
          Looking for the best IT business solutions?
        </h1>
        <Modal
          title="Enter your phone number"
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
        >
          <form className="pb-8">
            <input
              type="text"
              placeholder="Phone number ..."
              className="h-[52px] px-5 outline-none rounded-[10px] border-[1px] w-full border-gray-500"
            />
            <button
              type="submit"
              className="mt-4 w-full h-[52px] rounded-[10px] text-center bg-green-600 text-white font-semibold"
            >
              Yuborish
            </button>
          </form>
        </Modal>

        <button
          onClick={showModal}
          className="bg-[#070706] rounded-[8px] leading-4 text-[15px] mt-8 w-[186px] h-[56px] md:h-[50px]"
        >
          CONTACT US
        </button>
      </div>
    </div>
  );
}

export default CtaSection;
