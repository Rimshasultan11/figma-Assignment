import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Content from "./Components/Content";
import Banner from "./Components/Banner";
import Sponsor from "./Components/Sponsor";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Content/>
      <Banner/>
      <Sponsor/>
      <Footer/> 
    </div>
  );
}
