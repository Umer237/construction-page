import React from "react";
import { GiMineTruck } from "react-icons/gi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaTrowelBricks } from "react-icons/fa6";
import { GiConcreteBag } from "react-icons/gi";
import { LuMessagesSquare } from "react-icons/lu";

const page = () => {
  return (
    <>
      <div className="Core-Features-Flex">
        <div>
          <img
            src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/features-2.jpg"
            alt=""
          />
        </div>
        <div className="text-width">
          <div className="Core-Features-H-01">
            <GiMineTruck className="icon-01" />
            <h4>OUR CORE FEATURES</h4>
          </div>
          <h3 className="h-02">We're Building Better Projects</h3>
          <p className="p-01">
            <span>
              convallis quam eget, dignissim massa. Proin efficitur, mauris vel
              condimentum pulvinar, velit orci consectetur ligula, eget egestas
              magna mi ut arcu. Phasellus nec odio orci. Nunc id massa ante.
              Suspendisse sit amet neque euismod,
            </span>
          </p>

          <div className="icon-flex">
            <div className="big-icon-flex">
              <FaTrowelBricks className="big-icon" />
              <div>
                <h3>Science of Building</h3>
                <p>We leverage cutting-edge.</p>
              </div>
            </div>
            <div className="big-icon-flex">
              <GiConcreteBag className="big-icon" />
              <div>
                <h3>Engineering Marvels</h3>
                <p>Cutting edge technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
