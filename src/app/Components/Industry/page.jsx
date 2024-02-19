import React from "react";
import { GiMineTruck } from "react-icons/gi";

const page = () => {
  return (
    <>
      <div className="Industry-Flex">
        <div className="Industry-Top-Text">
          <div className="top-text-01">
            <GiMineTruck className="Industry-top-truck" />
            <h3>AMAZING INDUSTRY</h3>
          </div>
          <h2>Best Industrial Services Provider</h2>
          <p>
            We leverage cutting-edge technologies to create compelling content
            across various digital platforms.
          </p>
          <div className="Industry-d-flex">
            <div>
              <div>
                <h3>230+</h3>
              </div>
              <div>
                <h3>
                  <span>Project Complete</span>
                </h3>
              </div>
            </div>
            <div>
              <div>
                <h3>20+</h3>
              </div>
              <div>
                <h3>
                  <span>Quality Team</span>
                </h3>
              </div>
            </div>
            <div>
              <div>
                <h3>30+</h3>
              </div>
              <div>
                <h3>
                  <span>Years Of Experience</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="Img-Flex">
          <div className="img-hover-border">
            <img
              src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/shape-4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
