import React from "react";
import { GiMineTruck } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaTrowelBricks } from "react-icons/fa6";
import { GiConcreteBag } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";

const page = () => {
  return (
    <>
      <div className="About-us-Flex">
        <div>
          <img src="./img/about-us.png" alt="" />
        </div>
        <div className="text-width">
          <div className="About-H-01">
            <GiMineTruck className="icon-01" />
            <h4>ABOUT US</h4>
          </div>
          <h3 className="h-02">Engineering Marvels In Construction</h3>
          <p className="p-01">
            We leverage cutting-edge technologies to create compelling content
            across various digital platforms.
          </p>
          <div className="check-i-flex">
            <IoMdCheckmarkCircleOutline className="check-i" />
            <p>The Art and Science of Building</p>
          </div>
          <div className="check-i-flex">
            <IoMdCheckmarkCircleOutline className="check-i" />
            <p>Mastering the Construction Process</p>
          </div>
          <div className="check-i-flex">
            <IoMdCheckmarkCircleOutline className="check-i" />
            <p>Green Construction Practices</p>
          </div>
          <div className="big-icon-flex">
            <FaTrowelBricks className="big-icon" />
            <div>
              <h3>The Art and Science of Building</h3>
              <p>
                We leverage cutting-edge technologies to create compelling
                content.
              </p>
            </div>
          </div>
          <div className="big-icon-flex">
            <GiConcreteBag className="big-icon" />
            <div>
              <h3>The Art and Science of Building</h3>
              <p>
                We leverage cutting-edge technologies to create compelling
                content.
              </p>
            </div>
          </div>
          <div className="Contact-Buttons">
            <button>Explore Services</button>
            <LuMessagesSquare className="message-icon" />
            <div>
              <p>Chat Us Anytime</p>
              <h3>(406)555-0120</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
