import React from "react";
import { FaHardHat } from "react-icons/fa";
import { SlCallIn } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const page = () => {
  return (
    <>
      <div className="Footer-BG">
        <div className="Footer-Flex">
          <div className="Full_Logo">
            <FaHardHat className="Logo" />
            <h2>Buildsphere</h2>
          </div>
          <div className="Img-And-Contact-Flex">
            <div className="Img-flex">
              <img
                src="https://i.pinimg.com/564x/14/88/d1/1488d1f5b6656824cf821025a23f03e7.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/c3/ab/18/c3ab18327516f02afc5a6083392f36fc.jpg"
                alt=""
              />
              <img
                src="https://i.pinimg.com/564x/92/b3/21/92b32173fb489a5b37da378f97468b68.jpg"
                alt=""
              />
            </div>
            <div>
              <h4>Have Any Question ? Call</h4>
              <h3>(406)-555-0120</h3>
            </div>
          </div>
        </div>
        <div className="Footer-Second-FLex">
          <div>
            <h3>ABOUT COMPANY</h3>
            <div>
              <p>
                We leverage cutting-edge technologies to create compelling
                content across various digital platforms.
              </p>
            </div>
            <div className="information-flex">
              <SlCallIn className="information-icon" />
              <h4>+1(246)-333-0088</h4>
            </div>
            <div className="information-flex">
              <IoIosMail className="information-icon" />
              <h4>alma.lawson@example.com</h4>
            </div>
            <div className="information-flex">
              <FaLocationDot className="information-icon" />
              <h4>4140 parker Rd. Allentown, New Mexico 31134</h4>
            </div>
          </div>
          <div>
            <h3>QUICK LINK</h3>
            <p>Popular Services</p>
            <p>Latest News</p>
            <p>Team Members</p>
            <p>Testimonials</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h3>NEWS LETTER</h3>
            <p>We leverage cutting-edge technologies to create compelling .</p>
            <input type="text" placeholder="Email Address" />
            <button>
              <MdKeyboardArrowRight />
            </button>
          </div>
        </div>
        <div className="Footer-Bottom">
          <h3>Copyright ©2024 Buildsphere. All Rights Reserved</h3>
        </div>
      </div>
    </>
  );
};

export default page;
