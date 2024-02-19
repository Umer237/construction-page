import React from "react";
import { FaHardHat } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="Navbar_BG">
        <div className="Navbar_Flex">
          <div className="Full_Logo">
            <FaHardHat className="Logo" />
            <h2>Buildsphere</h2>
          </div>
          <div className="Links">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Service</a>
            </li>
          </div>
          <div>
            <button>Get A Quote</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
