import React from "react";
import { GiMineTruck } from "react-icons/gi";

const page = () => {
  return (
    <>
      <div className="Projects-Top-Text">
        <div className="top-text-01">
        <GiMineTruck className="project-top-truck" />
        <h3>OUR PROJECTS</h3>
        </div>
        <h2>Explore Our Latest Projects Works</h2>
        <p>
          We leverage cutting-edge technologies to create compelling content
          across various digital platforms.
        </p>
      </div>
      <div className="gallery">
        <ul>
          <li>
            <a href="">
              <figure>
                <img
                  src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/project-1.jpg"
                  alt="Volcano and lava field against a stormy sky"
                />
                <figcaption>House Renovation</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/project-2.jpg"
                  alt="Guy on a bike ok a wooden bridge with a forest backdrop"
                />
                <figcaption>Engineering Marvels</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/project-3.jpg"
                  alt="Person standing alone in a misty forest"
                />
                <figcaption>Welding & Laser</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/project-4.jpg"
                  alt="Person hiking on a trail through mountains while taking a photo with phone"
                />
                <figcaption>Structural Engineering</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src="https://wp.valorwide.com/buildsphere/wp-content/uploads/2024/01/project-5.jpg"
                  alt="Street scene with person walking and others on motorbikes, all wearing masks"
                />
                <figcaption>Material Supply</figcaption>
              </figure>
            </a>
          </li>
          <li>
            <a href="">
              <figure>
                <img
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Fashionable-looking girl with blond hair and pink sunglasses"
                />
                <figcaption>Building Structers</figcaption>
              </figure>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default page;
