import React from "react";
import { GiMineTruck } from "react-icons/gi";
import { ImStarFull } from "react-icons/im";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const page = () => {
  return (
    <>
    <div className="Client-BG">
      <div className="Client-Flex">
        <div className="Client-Top-Text">
          <div className="top-text-01">
            <GiMineTruck className="Client-top-truck" />
            <h3>CLIENT FEEDBACK</h3>
          </div>
          <h2>What Our Customers Are Talking About</h2>
        </div>
        <div>
          <p>
            Proin efficitur, mauris vel condimentum pulvinar, velit orci
            consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
            odio orci. Nunc id massa ante. Suspendisse sit amet neque euismod,
            convallis quam eget, dignissim massa.
          </p>
        </div>
      </div>
      <div className="review-slider-width">
        <div className="review-slider">
          <div className="review-main-flex">
            <div className="review-flex">
              <div className="review-inner-up-flex">
                <div className="review-inner-flex">
                  <img
                    src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/testimonial-1.png"
                    alt=""
                    />
                  <div>
                    <h4>Darlene Robertson</h4>
                    <p>Web Design</p>
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                  </div>
                </div>
                <div>
                  <BiSolidQuoteAltRight className="symbol-icon" />
                </div>
              </div>
            </div>
            <div>
              <p>
                <span>
                Proin efficitur, mauris vel condimentum pulvinar, velit orci
                consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
                odio orci. Nunc id massa ante.
                </span>
              </p>
            </div>
          </div>
          <div className="review-main-flex">
            <div className="review-flex">
              <div className="review-inner-up-flex">
                <div className="review-inner-flex">
                  <img
                    src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/testimonial-1.png"
                    alt=""
                    />
                  <div>
                    <h4>Darlene Robertson</h4>
                    <p>Web Design</p>
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                    <ImStarFull className="star-icon" />
                  </div>
                </div>
                <div>
                  <BiSolidQuoteAltRight className="symbol-icon" />
                </div>
              </div>
            </div>
            <div>
              <p>
                <span>
                Proin efficitur, mauris vel condimentum pulvinar, velit orci
                consectetur ligula, eget egestas magna mi ut arcu. Phasellus nec
                odio orci. Nunc id massa ante.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
                    </div>
    </>
  );
};

export default page;
