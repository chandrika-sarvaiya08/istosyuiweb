
import * as React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import Image from "next/image"; // Import next/image for optimized images
import heroImage from "../public/image.webp"; // Adjust the path based on where your image is located
import hero from "../public/hero.jpg"; // Background image
import styles from "../styles/Hero.module.css"; // Import the CSS module

function Hero() {
  return (
    <Box
      className={styles["hero-container"]}
      sx={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover", // Ensure the background image covers the entire area
        backgroundPosition: "center", // Keep the background centered
        display: "flex",
        flexDirection: "column", // Stack elements on top of each other for smaller screens
        justifyContent: "center", // Vertically center the content
        alignItems: "center", // Horizontally center the content
        minHeight: "100vh", // Ensure the container takes up at least the full viewport height
      }}
    >
      <Grid
        container
        spacing={6}
        sx={{
          margin : "auto",
          zIndex : 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // Stack on small screens, row on larger
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Full width
          padding: { xs: "0 40px", sm: "0 60px" }, // Adjust padding for different screen sizes
        }}
      >
        {/* Left Side: Title, Text, and Button */}
        <Grid item xs={12} sm={6}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              textAlign: "left",
              fontWeight: 700,
              mb: 2,
              color: "#3f3c3c",
              letterSpacing: ".2px",
              whiteSpace: "nowrap", // Prevent text from wrapping
              fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" }, // Adjust font size for small screens
            }}
          >
            Welcome to
            <Typography
              component="span"
              sx={{
                fontFamily: "'Monoton', cursive", // Custom font for Istosy
                background: "#3895D3", // Gradient effect
                WebkitBackgroundClip: "text", // Clip gradient to text
                WebkitTextFillColor: "transparent", // Transparent fill
                letterSpacing: "0.1em", // Spacing between letters
                fontSize: "1.2em", // Slightly larger than surrounding text
              }}
            >
              &nbsp;Istosy
            </Typography>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 4,
              color: "gray", // Darker color for better contrast
              letterSpacing: ".8px",
              fontFamily: "'Roboto', sans-serif", // Custom font for modern look
              fontWeight: 600, // Semi-bold for a stronger emphasis
              lineHeight: 1.5, // Increased line-height for better readability
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" }, // Adjust font size for mobile
            }}
          >
            Exclusive technology to provide IT solutions
            <br />
            Empowering your business with cutting-edge tools and strategies.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "flex-start" }, // Align buttons better on small screens
              gap: { xs: 2, sm: 3 }, // Add space between buttons
            }}
          >
            <Button
              sx={{
                background: "#3895D3",
                color: "#fff",
                padding: "12px 40px",
                border: "2px solid transparent",
                transition: "all 0.4s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3895D3",
                  borderColor: "#3895D3",
                  transform: "scale(1.05)",
                },
              }}
            >
              Get Started
            </Button>
            <Button
              sx={{
                background: "#3895D3",
                color: "#fff",
                padding: "12px 40px",
                border: "2px solid transparent",
                transition: "all 0.4s ease",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3895D3",
                  borderColor: "#3895D3",
                  transform: "scale(1.05)",
                },
              }}
            >
              Quick Support
            </Button>
          </Box>
        </Grid>

        {/* Right Side: Image */}
        <Grid item xs={12} sm={6} sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={heroImage} // Correct path to your image
            alt="hero"
            layout="responsive" // Ensures the image resizes according to screen size
            width={1500}
            height={800}
            className={styles.heroImage} // Apply CSS module class
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;
