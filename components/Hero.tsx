
// import React from "react";
// import { Box, Typography, Grid, Button } from "@mui/material";
// import Image from "next/image";
// import heroImage from "../public/image.webp"; // Adjust the path based on your image location
// import hero from "../public/hero.jpg"; // Background image
// import styles from "../styles/Hero.module.css"; // Import external CSS for custom styles

// const Hero: React.FC = () => {
//   return (
//     <Box
//       className={styles["hero-container"]}
//       sx={{
//         backgroundImage: `url(${hero.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
        
//       }}
//     >
//       <Box sx={{ width: "100%", px: { xs: 3, lg: 8 }, mx: "auto" }}>
//         <Grid
//           container
//           spacing={6}
//           alignItems="center"
//           justifyContent="space-between"
       
//         >
//           {/* Left Side: Title, Text, and Buttons */}
//           <Grid item xs={12} md={6}>
//             <Typography
//               variant="h3"
//               component="h1"
//               sx={{
//                 zIndex:"99",
//                 fontWeight: 700,
//                 color: "#3f3c3c",
//                 mb: 2,
//                 textAlign: { xs: "center", md: "left" },
//               }}
//             >
//               Welcome to
//               <Typography
//                 component="span"
//                 sx={{
//                   display: "inline-block",
//                   fontFamily: "'Monoton', cursive",
//                   background: "#3895D3",
//                   WebkitBackgroundClip: "text",
//                   WebkitTextFillColor: "transparent",
//                   ml: 1,
//                   fontSize : "48px"
//                 }}
//               >
//               &nbsp;Istosy
//               </Typography>
//             </Typography>

//             <Typography
//               variant="body1"
//               sx={{
//                 color: "gray",
//                 mb: 4,
//                 fontWeight: 500,
//                 textAlign: { xs: "center", md: "left" },
//               }}
//             >
//               Exclusive technology to provide IT solutions.
//               <br />
//               Empowering your business with cutting-edge tools and strategies.
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: { xs: "column", sm: "row" },
//                 gap: 2,
//                 justifyContent: { xs: "center", md: "flex-start" },
//               }}
//             >
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#3895D3",
//                   color: "white",
//                   px: 5,
//                   py: 1,
//                   borderRadius: 1,
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     backgroundColor: "white",
//                     color: "#3895D3",
//                     border: "2px solid #3895D3",
//                   },
//                 }}
//               >
//                 Get Started
//               </Button>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#3895D3",
//                   color: "white",
//                   px: 5,
//                   py: 1,
//                   borderRadius: 1,
//                   transition: "all 0.3s ease",
//                   "&:hover": {
//                     backgroundColor: "white",
//                     color: "#3895D3",
//                     border: "2px solid #3895D3",
//                   },
//                 }}
//               >
//                 Quick Support
//               </Button>
//             </Box>
//           </Grid>

//           {/* Right Side: Image */}
//           <Grid item xs={12} md={6}>
//             <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
//               <Image
//                 src={heroImage}
//                 alt="Hero"
//                 className={styles.heroImage}
//                 priority={true}
//                 placeholder="blur"
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Hero;
import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Image from "next/image";
import heroImage from "../public/image.webp"; // Adjust the path based on your image location
import hero from "../public/hero.jpg"; // Background image
import styles from "../styles/Hero.module.css"; // Import external CSS for custom styles

const Hero: React.FC = () => {
  return (
    <Box
      className={styles["hero-container"]}
      sx={{
        backgroundImage: `url(${hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        zIndex: 1,
      }}
    >
      <Box sx={{ width: "100%", px: { xs: 3, lg: 8 }, mx: "auto" }}>
        <Grid
          container
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
          
        >
          {/* Left Side: Title, Text, and Buttons */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                color: "#3f3c3c",
                mb: 2,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
              }}
            >
              Welcome to
              <Typography
                component="span"
                sx={{
                  display: "inline-block",
                  fontFamily: "'Monoton', cursive",
                  background: "#3895D3",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  ml: 2,
                  fontSize: { xs: "2rem", md: "3rem", lg: "4rem" },
                  
                }}
              >
                Istosy
              </Typography>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "gray",
                mb: 4,
                fontWeight: 500,
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1rem", md: "1.25rem" },
              }}
            >
              Exclusive technology to provide IT solutions.
              <br />
              Empowering your business with cutting-edge tools and strategies.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3895D3",
                  color: "white",
                  px: 5,
                  py: 1,
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#3895D3",
                    border: "2px solid #3895D3",
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#3895D3",
                  color: "white",
                  px: 5,
                  py: 1,
                  borderRadius: 1,
                  transition: "all 0.3s ease",
                  fontSize: { xs: "0.875rem", md: "1rem" },
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#3895D3",
                    border: "2px solid #3895D3",
                  },
                }}
              >
                Quick Support
              </Button>
            </Box>
          </Grid>

          {/* Right Side: Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
              <Image
                src={heroImage}
                alt="Hero"
                className={styles.heroImage}
                priority={true}
                placeholder="blur"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Hero;
