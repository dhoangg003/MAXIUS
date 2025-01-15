"use client"
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PageOne from "./Home/PageOne/PageOne";
import PageTwo from "./Home/PageTwo/PageTwo";
import PageThree from "./Home/PageThree/PageThree";
import PageFourth from "./Home/PageFour/PageFourth";
import PageFive from "./Home/PageFive/PageFive";

export default function Index() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeights = [
        document.getElementById("page-1").offsetTop,
        document.getElementById("page-2").offsetTop,
        document.getElementById("page-3").offsetTop,
        document.getElementById("page-4").offsetTop,
        document.getElementById("page-5").offsetTop,
      ];

      if (scrollPosition >= pageHeights[1] && scrollPosition < pageHeights[2]) {
        setColor("white"); // Trang 2
      } else if (scrollPosition >= pageHeights[2] && scrollPosition < pageHeights[3]) {
        setColor("white"); // Trang 3
      } else if (scrollPosition >= pageHeights[4]) {
        setColor("white"); // Trang 5
      } else {
        setColor("black"); // Trang 1 và Trang 4
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar color={color} />

      {/* Nội dung các trang */}
      <div>
        <div id="page-1">
          <PageOne />
        </div>
        <div id="page-2">
          <PageTwo />
        </div>
        <div id="page-3">
          <PageThree />
        </div>
        <div id="page-4">
          <PageFourth />
        </div>
        <div id="page-5">
          <PageFive />
        </div>
      </div>
    </div>
  );
}
