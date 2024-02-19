import React from "react";
import { GiMineTruck } from "react-icons/gi";

const page = () => {
  return (
    <>
      <div className="Contact-us-BG">
        <div className="Contact-us-Top-Text">
          <div className="top-text-01">
            <GiMineTruck className="Contact-us-top-truck" />
            <h3>GET IN TOUCH</h3>
          </div>
          <h2>Talk About Your Next Dream Project</h2>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Phone No" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Subject" />
          <textarea
            name="Message"
            id=""
            cols="90"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send Message</button>
        </div>
        <div className="Contact-Us-Flex">
          <img
            src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/project-form-1.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default page;
