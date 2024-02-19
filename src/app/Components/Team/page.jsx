import React from "react";
import { GiMineTruck } from "react-icons/gi";

const page = () => {
  return (
    <>
      <div className="Our-Team-Top-Text">
        <div className="top-text-01">
          <GiMineTruck className="Team-top-truck" />
          <h3>PROFESSIONAL EXPERT</h3>
        </div>
        <h2>Meet The Team</h2>
      </div>
      <div className="Second-Section-Flex">
        <div className="wrapper">
          <div className="image">
            <img
              className="team"
              src="https://i.pinimg.com/564x/14/88/d1/1488d1f5b6656824cf821025a23f03e7.jpg"
              alt=""
            />
            <div className="content">
              <h3>ABDUL</h3>
              <p>All Not Well In The Mahrez Camp</p>
            </div>
          </div>
          <div className="image">
            <img
              className="team"
              src="https://i.pinimg.com/564x/56/00/6f/56006fac1593c3d787e0a0bf9c6177b6.jpg"
              alt=""
            />
            <div className="content">
              <h3>SHAHID</h3>
              <p>All Not Well In The Mahrez Camp</p>
            </div>
          </div>
          <div className="image">
            <img
              className="team"
              src="https://i.pinimg.com/564x/71/d7/17/71d717b6768f9ae22210de4198909546.jpg"
              alt=""
            />
            <div className="content">
              <h3>YOUSAF</h3>
              <p>All Not Well In The Mahrez Camp</p>
            </div>
          </div>
          <div className="image">
            <img
              className="team"
              src="https://i.pinimg.com/564x/de/c8/68/dec8688655c6f4fa6c076654d546ee53.jpg"
              alt=""
            />
            <div className="content">
              <h3>IMRAN</h3>
              <p>All Not Well In The Mahrez Camp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
