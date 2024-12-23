"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { keyframes } from "@mui/system";
import Header from "./Header";
import Hero from "./Hero";
import Cards from "./Cards";
import Curser from "./Curser";
import Testimonial from "./Testimonial";

// Keyframe for rotating animation of gear
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Keyframe for typing animation for text
const typing = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

function Loader() {
  const [loading, setLoading] = useState(true);

  // Simulate page load
  useEffect(() => {
    // Simulate loading for 3 seconds to give time for the loader to show up
    const timer = setTimeout(() => {
      setLoading(false); // Set loading state to false after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "#f5f5f5", // Light gray background
          }}
        >
          {/* Rotating Gear Loader */}
          <Box
            sx={{
              width: 100,
              height: 100,
              border: "8px solid #f3f3f3",
              borderTop: "8px solid #3895D3", // IT theme color (blue)
              borderRadius: "50%",
              animation: `${rotate} 2s linear infinite`, // Gear rotation
            }}
          />

          {/* Typing animation for text */}
          <Typography
            variant="h6"
            sx={{
              marginTop: "20px",
              color: "#3895D3", // IT theme color (blue)
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              textAlign: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: "0",
              animation: `${typing} 3s steps(40) 1s forwards`, // Typing animation
            }}
          >
            Loading IT Resources...
          </Typography>
        </Box>
      ) : (
        <div>
          {/* Your page content here */}
          <Curser/>
          <Header/>

          <Hero/>
          <Cards/>
          <Testimonial/>
        </div>
      )}
    </>
  );
}

export default Loader;
