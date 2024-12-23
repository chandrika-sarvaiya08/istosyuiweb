"use client";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import { Box, Button } from "@mui/material";

import "../styles/Cards.module.css";

interface Post {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  imgSrc: string;
  authorImg: string;
}

const posts: Post[] = [
  {
    id: 1,
    category: "Data Analytics",
    title: "Dolorum optio tempore voluptas dignissimos",
    author: "Maria Doe",
    date: "Jan 1, 2024",
    imgSrc: "/blog-1.jpg",
    authorImg: "/blog-author.jpg",
  },
  {
    id: 2,
    category: "Software Developer",
    title: "Nisi magni odit consequatur autem nulla dolorem",
    author: "Allisa Mayer",
    date: "Jan 5, 2024",
    imgSrc: "/blog-2.jpg",
    authorImg: "/blog-author-2.jpg",
  },
  {
    id: 3,
    category: "IT Services and Consulting",
    title: "Possimus soluta ut id suscipit ea ut in quo quia et soluta",
    author: "Mark Dower",
    date: "Jan 22, 2024",
    imgSrc: "/blog-3.jpg",
    authorImg: "/blog-author-3.jpg",
  },
];

const Cards: FC = () => {
  return (
    <Typography className="recent-posts py-16 bg-zinc-100">
      <Box className="max-w-screen-xl mx-auto px-4">
        <Typography className="section-header text-center mb-8">
          <Typography
            variant="h5"
            className="font-bold text-3xl mb-5 pb-5 text-[#3895d3]"
            sx={{
              fontSize: { xs: "24px", fontWeight: "700" },
            }}
          >
            SERVICES
          </Typography>
          <Typography
            component="p"
            variant="h3"
            className="text-gray-600 text-5xl pb-8 relative"
            sx={{
              fontSize: { xs: "34px" },
            }}
          >
            What we do
            <span className="block w-20 h-1 bg-[#3895D3] mx-auto mt-5"></span>
          </Typography>
        </Typography>

        <Grid container spacing={4} className="mt-8">
          {posts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id}>
              <Card className="cards overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow relative group">
                <CardMedia className="relative overflow-hidden">
                  <Image
                    src={post.imgSrc}
                    alt={post.title}
                    className="w-full h-60 object-cover transition-transform duration-300 transform group-hover:scale-110"
                    width={500}
                    height={400}
                  />
                  {/* Gradient Overlay */}
                  <Box className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#3895D3] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Box className="flex space-x-4">
                      <Box className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <IconButton sx={{ color: "#3895D3" }}>
                          <ThumbUpIcon />
                        </IconButton>
                      </Box>
                      <Box className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        <IconButton sx={{ color: "#3895D3" }}>
                          <CommentIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </CardMedia>

                <CardContent className="p-7">
                  <Typography
                    variant="body2"
                    className="text-base text-gray-500"
                  >
                    {post.category}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      margin: "16px 0",
                      "&:hover": {
                        color: "#3895D3",
                        transition: ".3s",
                      },
                    }}
                    className="text-2xl font-bold"
                  >
                    {post.title}
                  </Typography>
                  <Typography component="div" className="flex items-center">
                    <Avatar
                      src={post.authorImg}
                      alt={post.author}
                      className="mr-4"
                    />
                    <Typography component="div">
                      <Typography className="font-semibold">
                        {post.author}
                      </Typography>
                      <Typography
                        variant="caption"
                        className="text-sm text-gray-400"
                      >
                        {post.date}
                      </Typography>
                    </Typography>
                  </Typography>
                 
                  <Button
                    sx={{
                      marginTop: "20px",
                      textTransform: "uppercase",
                      // fontWeight: "bold",
                      color: "white",
                      backgroundColor: "#3895D3",
                      borderRadius: "8px",
                      padding: "8px 18px",
                      fontSize: "14px",
                      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#2a78b2",
                        transform: "translateY(-2px)",
                        boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    <a
                      href="#"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      Read More{" "}
                      <span style={{ fontSize: "20px", lineHeight: "0" }}>
                        +
                      </span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Typography>
  );
};

export default Cards;
