import React from "react";
import { GiMineTruck } from "react-icons/gi";

const page = () => {
  return (
    <>
      <div className="Blogs-Top-Text">
        <div className="top-text-01">
          <GiMineTruck className="blogs-top-truck" />
          <h3>LATEST NEWS & BLOGS</h3>
        </div>
        <h2>Read Our Constriction News Blogs & Articles</h2>
        <p>
          We leverage cutting-edge technologies to create compelling content
          across various digital platforms.
        </p>
      </div>
      <div className="blog">
        <div className="blog-container">
          <div className="blog-box">
            <div className="blog-img">
              <img
                src="https://i.pinimg.com/564x/03/a9/71/03a971502bcfc607b8f2246ccd067815.jpg"
                alt=""
              />
            </div>
            <div className="blog-text">
              <span>18 July 2021 / Web Design</span>
              <a href="#" className="blog-title">
                What Has Happened of All of the web Design Ideas?
              </a>
              <button>Read-More</button>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img
                src="https://i.pinimg.com/564x/03/a9/71/03a971502bcfc607b8f2246ccd067815.jpg"
                alt=""
              />
            </div>
            <div className="blog-text">
              <span>18 July 2021 / Web Design</span>
              <a href="#" className="blog-title">
                What Has Happened of All of the web Design Ideas?
              </a>
              <button>Read-More</button>
            </div>
          </div>
          <div className="blog-box">
            <div className="blog-img">
              <img
                src="https://i.pinimg.com/564x/03/a9/71/03a971502bcfc607b8f2246ccd067815.jpg"
                alt=""
              />
            </div>
            <div className="blog-text">
              <span>18 July 2021 / Web Design</span>
              <a href="#" className="blog-title">
                What Has Happened of All of the web Design Ideas?
              </a>
              <button>Read-More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
