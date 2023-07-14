
import HeaderTop from "./components/HeaderTop";
import HeaderTopsecond from "./components/HeaderTopsecond";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import AboutUs from "./components/AboutUs";
import Vision from "./components/Vision";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import Slider from "./components/Slider";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


export default function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [num, setNum] = useState(1024)

  function desktopcomp() {
    return (
      <>

        <HeaderTop />
        <HeaderTopsecond />
        <Navbar />
        <Notes />
        <AboutUs />
        <Vision />
        <Testimonials />
        <Slider />


        <Carousel breakPoints={breakPoints} >
          <Item><img src="./nature5.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature5.jpg" /></Item>
          <Item><img src="./nature5.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature5.jpg" /></Item>
        </Carousel>



        <Footer />

      </>
    )
  }


  function mobilecomp() {
    return (
      <>
        <Navbar />
        <Notes />
        <AboutUs />
        <Vision />
        <Testimonials />
        <Slider />


        <Carousel breakPoints={breakPoints} >
          <Item><img src="./nature5.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature5.jpg" /></Item>
          <Item><img src="./nature5.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature2.jpg" /></Item>
          <Item><img src="./nature5.jpg" /></Item>
        </Carousel>



        <Footer />

      </>
    )
  }

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);


    return (() => {
      window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])


  return (
    <div>
      <ul>
        {screenSize.width > num ? desktopcomp() : mobilecomp()}

      </ul>

    </div>
  )
}