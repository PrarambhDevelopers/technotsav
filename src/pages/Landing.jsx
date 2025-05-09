import React, { useState, useEffect,useRef } from "react";
import Spline from "@splinetool/react-spline";
import Timeline from "../components/Timeline";
import FAQ from "../components/FAQ";
import Events from "../components/Events";
import bg from "/images/bg.jpg";
import poster from "/images/poster.jpg";
import mouseScroll from "/images/mouseScroll.png";
import dypcet_logo from "/images/DYPCET_white.png";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initScrollAnimations } from "../animations/scrollAnimations";
import Map from "../components/Map";
gsap.registerPlugin(ScrollTrigger);
// Required for accessibility
Modal.setAppElement("#root");

export default function Landing() {
  const imageRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleViewPoster = () => setIsModalOpen(true);

  const handleDownloadPoster = () => {
    const link = document.createElement("a");
    link.href = poster;
    link.download = "Technotsav2K25_Poster.jpg";
    link.click();
  };


  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // Adjust multiplier for intensity
    const y = (e.clientY / innerHeight - 0.5) * 30;

    if (imageRef.current) {
      imageRef.current.style.transform = `translate(${x}px, ${y}px) `; // Optional: slight zoom
    }
  };

  const resetTransform = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = `translate(0, 0) scale(1)`;
    }
  };


  useEffect(() => {
    initScrollAnimations(); // Initialize scroll animations
  }, []);
  



  

  return (
    <div>
      <img
        src={dypcet_logo}
        alt="Dypcet Logo"
        className="w-60 md:w-80 object-cover absolute top-40 md:top-30  left-1/2  transform -translate-x-1/2 z-10 fade-up"
      />

      {/* <div className="absolute bottom-10  left-1/2  transform -translate-x-1/2 flex flex-col items-center justify-center opacity-70">  
     

        </div> */}
      {/* <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
          transform: "translateZ(-1px) scale(2)",
          zIndex: "-1",
        }}
      ></div> */}
      <div className="relative w-screen h-screen flex justify-center items-center overflow-hidden"
           onMouseMove={handleMouseMove}
           onMouseLeave={resetTransform}
      >
       <img
      
        src={bg}
        alt="Background"
        className="absolute block md:hidden inset-0 w-full h-full object-cover transition-transform duration-200 ease-out scale-105  pointer-events-none"
      />
       <img
        ref={imageRef}
        src={bg}
        alt="Background"
        className="absolute hidden md:block inset-0 w-full h-full object-cover transition-transform duration-200 ease-out scale-105  pointer-events-none"
      />
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg})`,
            transform: "translateZ(-1px) scale(2)",
            zIndex: "-1",
          }}
        ></div>
        <p className="absolute top-70 md:top-71 text-center md:left-42 text-2xl md:text-4xl font-bold text-white/50 fustat-heading fade-up">
          DYPCET
        </p>
        <p className="title absolute text-5xl top-76 md:top-75 md:text-9xl font-bold text-transparent opacity-90 bg-clip-text bg-gradient-to-r from-[#cccee9] via-[#92adfa] to-[#99fffd] spacecrusaders-heading text-center fade-up">
          Technotsav 2K25
        </p>
        <p className="absolute top-102 md:top-106 text-center md:right-42 text-xl md:text-2xl font-bold text-white/80 fustat-heading fade-up">
            24th & 25th April  
        </p>

        {/* Buttons */}
        <div className="absolute hidden bottom-45 md:bottom-50 left-1/2 transform -translate-x-1/2 md:flex gap-3 flex-col md:flex-row items-center justify-center fade-up">
          {/* <button
            onClick={handleViewPoster}
            className="border-2 text-white w-40 md:w-40 hidden md:block hover:border-[#365b9e] transition-all ease-in-out hover:bg-gradient-to-b from-[#30538e] to-[#5c89ff] rounded-xl px-4 py-3 font-bold fustat-heading active:scale-95"
          >
            View Poster
          </button> */}
          <button
            onClick={handleViewPoster}
            className="border-2 block w-40 md:w-40 bg-gradient-to-b from-[#30538e] to-[#5c89ff] text-white border-[#365b9e] transition-all ease-in-out rounded-xl px-4 py-3 font-bold fustat-heading active:scale-95"
          >
            View Poster
          </button>
          <button
            onClick={handleDownloadPoster}
            className="text-white hover:text-white w-40 hover:bg-gradient-to-b from-[#30538e] to-[#5c89ff] transition-all duration-300 ease-in-out border-2 border-white hover:border-[#365b9e] rounded-xl px-4 py-3 active:scale-95"
          >
            Download Poster
          </button>
        </div>
        <div className="absolute bottom-10  left-1/2  transform -translate-x-1/2 flex flex-col items-center justify-center opacity-70 ">
          <img
            src={mouseScroll}
            alt="Mouse Scroll"
            className="animate-bounce  w-15 h-15 object-cover fade-up"
          />
          <p className="text-white text-base md:text-xl fustat-heading fade-up">Scroll for More</p>
        </div>
        {/* Modal */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Technotsav Poster"
          className="w-[90%] max-w-3xl p-4 md:bg-white rounded-xl shadow-lg outline-none max-h-[90vh] overflow-y-auto "
          overlayClassName="fixed w-screen h-screen inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
        >
          <div className="flex flex-col items-end mb-2 justify-center ">
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-1 md:p-2 text-white md:text-black bg-red-500 md:bg-white  hover:bg-black/20 rounded-full font-semibold"
            >
              <RxCross2 className="text-lg md:text-xl " />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={poster}
              alt="Technotsav Poster"
              className="w-full h-auto rounded-md"
            />
          </div>
        </Modal>
      </div>
      <div className=" element-fade  my-10 md:hidden flex gap-3 flex-col items-center justify-center">
          {/* <button
            onClick={handleViewPoster}
            className="border-2 text-white w-40 md:w-40 hidden md:block hover:border-[#365b9e] transition-all ease-in-out hover:bg-gradient-to-b from-[#30538e] to-[#5c89ff] rounded-xl px-4 py-3 font-bold fustat-heading active:scale-95"
          >
            View Poster
          </button> */}
          <button
            onClick={handleViewPoster}
            className="border-2 block w-45 md:w-40 bg-gradient-to-b from-[#30538e] to-[#5c89ff] text-white border-[#365b9e] transition-all ease-in-out rounded-xl px-4 py-3 font-bold fustat-heading active:scale-95"
          >
            View Poster
          </button>
          <button
            onClick={handleDownloadPoster}
            className="text-[#30538e] font-bold active:text-white w-45 active:bg-gradient-to-b from-[#30538e] to-[#5c89ff] border-[#365b9e] transition-all duration-300 ease-in-out border-2  active:border-[#365b9e] rounded-xl px-4 py-3 active:scale-95"
          >
            Download Poster
          </button>
        </div>
      
      <Events />
      <Timeline />
      <Map/>
      <FAQ />
    </div>
  );
}

