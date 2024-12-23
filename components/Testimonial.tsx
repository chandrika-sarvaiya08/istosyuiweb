"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Typography, Avatar, Rating } from "@mui/material";
import "../styles/Testimonial.module.css";
import { BsQuote } from "react-icons/bs";

function Testimonial() {
    const settings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        appendDots: (dots) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            //   padding: "10px",
            // paddingTop :"50px",
              "& li": {
                margin: "0 8px", // Spacing between dots
              },
              "& li button:before": {
                fontSize: "12px",
                color: "#fff",
                transition: "all 0.3s ease",
              },
              "& li.slick-active button:before": {
                color: "#fff", // Active dot color
                fontSize: "16px",
              },
            }}
          >
            {dots}
          </Box>
        ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
      
//   const settings: Settings = {
//     dots: true,

//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024, // Tablet
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600, // Mobile
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

  const testimonials = [
    {
      image: "/blog-author.jpg",
      name: "John Doe",
      title: "Software Engineer",
      rating: 5,
      description:
        "This service is amazing! It helped me grow professionally and personally. This service is amazing! It helped me grow professionally and personally.",
    },
    {
      image: "/blog-author-2.jpg",
      name: "Jane Smith",
      title: "Web Developer",
      rating: 4,
      description:
        "Great experience! Very helpful and efficient team, I highly recommend them. Great experience! Very helpful and efficient team, I highly recommend them.",
    },
    {
      image: "/blog-author-3.jpg",
      name: "Alice Johnson",
      title: "Project Manager",
      rating: 5,
      description:
        "A game-changer for our team. I saw a significant improvement in my workflow. A game-changer for our team. I saw a significant improvement in my workflow.",
    },
  ];

  return (
    <Box
      className="testimonial-section"
      sx={{ padding: "50px 0", backgroundColor: "#3895d3" }}
    >
      <Typography className="section-header text-center mb-8">
        <Typography
          variant="h5"
          className="font-bold text-3xl mb-5 pb-5 text-[#3895d3]"
          sx={{
            fontSize: {
              xs: "24px",
              fontWeight: "700",
              color: "#fff",
              letterSpacing: ".6px",
            },
          }}
        >
          TESTIMONIAL
        </Typography>
        <Typography
          component="p"
          variant="h3"
          className="text-gray-600 text-5xl pb-8 relative"
          sx={{
            fontSize: {
              xs: "34px",
              sm: "40px",
              lg: "48px",
              letterSpacing: ".6px",
            },
          }}
        >
          What Our Clients Say
          <span className="block w-20 h-1 bg-[#fff] mx-auto mt-5"></span>
        </Typography>
      </Typography>

      <Container>
        <Slider
          {...settings}
          
        >
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                className="testimonial-slide"
                sx={{
                  overflow: "hidden",
                  padding: "20px",
                    // margin:"10px",
                    
                  textAlign: "center",
                  //   border: "2px solid #3895D3",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  marginBottom: "20px",
                  display: "flex", // Using flexbox for layout
                  flexDirection: "row-reverse", // Move the image to the right
                  alignItems: "center", // Center the content vertically
                  "&:hover": {
                    // Add hover effects here if needed
                    transform: "translateY(-2px)",

                  },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    //   justifyContent: "center",
                  }}
                >
                  <Box sx={{ width: "50%" }}>
                    <BsQuote
                      size={78} // Set the icon size
                      style={{
                        //   position: "absolute",
                        top: "-40px", // Position the quote at the top of the text
                        right: "-40px", // Right side of the text
                        color: "#3895D3",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        marginTop: "30px",
                        color: "#333",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "#777",
                        textAlign: "left",
                      }}
                    >
                      {testimonial.title}
                    </Typography>
                    <Rating
                      value={testimonial.rating}
                      readOnly
                      sx={{
                        marginTop: "10px ",
                        marginBottom: "30px",
                        color: "#FFD700",
                        textAlign: "left",
                        display: "flex",
                        justifyContent: "start",
                      }}
                    />
                  </Box>
                  <Box sx={{ width: "50%" }}>
                    <Avatar
                      alt={testimonial.name}
                      src={testimonial.image}
                      sx={{
                        width: 200, // Adjust width to show half image
                        height: "auto",
                        margin: "0 auto",
                        borderRadius: "50%",
                        top: "-50px",
                        left: "-100px",
                        boxShadow: 3,
                        overflow: "hidden", // Clip the image
                        transform: "translateX(60%)", // Move the image to the right
                        objectPosition: "center", // Center the face
                        objectFit: "cover", // Ensure the image is fully contained
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ flex: 2, paddingRight: "20px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "#555",
                      fontSize: "14px",
                      textAlign: "left",
                      letterSpacing: ".3px",
                    }}
                  >
                    {testimonial.description}
                  </Typography>
                </Box>
              </Box>
            ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default Testimonial;
