'use client'
import React, { useState, useEffect } from "react";

const FeaturedScroll: React.FC = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [scrollHeight,setHeight] = useState('0px')
  const [HasMount,setHasMounted] =useState(false)

  useEffect(() => {
    setHasMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition)
      const InnerHeight = window.innerHeight;
      const totalheight  =document.documentElement.scrollHeight;


      const percentHeight = (scrollPosition/(totalheight-InnerHeight)) * 100;

      setHeight(`${percentHeight}%`);

      // Adjust the condition to change colors at specific scroll points
      if (scrollPosition > 100) {
        setBgColor("#FFA500"); // Orange Color
     
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Left Side Color Bar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: scrollHeight,
          width: "6px",
          backgroundColor: bgColor,
          transition: "background-color 0.3s ease-in-out",
        }}
      ></div>

      
    </div>
  );
};

export default FeaturedScroll;
