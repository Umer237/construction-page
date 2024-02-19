import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/page";
import Banner from "./Components/Banner/page";
import Aboutus from "./Components/Aboutus/page";
import Projects from "./Components/Projects/page";
import Industry from "./Components/Industry/page";
import Partners from "./Components/Partners/page";
import Footer from "./Components/Footer/page";
import Team from "./Components/Team/page";
import CoreFeatures from "./Components/CoreFeatures/page";
import Reviews from "./Components/Reviews/page";
import Blogs from "./Components/Blogs/page";
import Contactus from "./Components/Contactus/page";



export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Aboutus />
      <Industry />
      <Projects />
      <CoreFeatures />
      <Team />
      <Reviews/>
      <Contactus/>
      <Blogs/>
      <Partners />
      <Footer />
    </>
  );
}
