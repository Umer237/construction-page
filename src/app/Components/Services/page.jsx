import React from "react";
import { GiMineTruck } from "react-icons/gi";

const page = () => {
  return (
    <>
      <div className="Our-Services-Top-Text">
        <div className="top-text-01">
          <GiMineTruck className="Services-top-truck" />
          <h3>BEST SERVICES</h3>
        </div>
        <h2>BEST SERVICES</h2>
        <p>
          We leverage cutting-edge technollogies to create compeling content
          across various digital platforms.
        </p>
      </div>
      <div className="Second-Section-Flex">
        <div className="wrapper">
          <div className="image">
            <img
              className="Services"
              src="https://i.pinimg.com/564x/b2/47/10/b24710719e15927a50d40f267806104d.jpg"
              alt=""
            />
            <div className="content">
              <h3>Structural Engineering</h3>
              <p>We leverage cutting-edge technollogies to create</p>
            </div>
          </div>
          <div className="image">
            <img
              className="Services"
              src="https://i.pinimg.com/564x/34/27/47/342747d910364f7784a566e23d99fb8e.jpg"
              alt=""
            />
            <div className="content">
              <h3>Welding & Laser</h3>
              <p>We leverage cutting-edge technollogies to create</p>
            </div>
          </div>
          <div className="image">
            <img
              className="Services"
              src="https://i.pinimg.com/564x/db/4a/59/db4a592b1b66edf4d315c8dcc3387e54.jpg"
              alt=""
            />
            <div className="content">
              <h3>Material Supply</h3>
              <p>We leverage cutting-edge technollogies to create</p>
            </div>
          </div>
          <div className="image">
            <img
              className="Services"
              src="https://i.pinimg.com/564x/1d/97/6b/1d976bcb720302441c32687aa9e8654b.jpg"
              alt=""
            />
            <div className="content">
              <h3>House Renovation</h3>
              <p>We leverage cutting-edge technollogies to create</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
