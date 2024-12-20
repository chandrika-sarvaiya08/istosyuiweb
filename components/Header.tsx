// "use client";
// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import MenuItem from "@mui/material/MenuItem";
// import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined"; // IT-related logo icon
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// const pages = ["Home", "Services", "About", "Portfolio", "Contact"];

// function Header() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: " #3895D3", zIndex: 1300, padding: "10px 0px" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Logo */}
//           <ComputerOutlinedIcon
//             sx={{
//               display: { xs: "none", md: "flex" },
//               mr: 1,
//               fontSize: "2rem", // Adjust size of the icon
//               color: "white",
//             }}
//           />
//           <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="#"
//               sx={{
//                 color: "white",
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 textDecoration: "none",
//                 fontSize: { xs: "22px", sm: "26px" }, // Adjust font size based on screen size
//               }}
//             >
//               Istosy<span>.</span>
//             </Typography>
//           </Box>

//           {/* Mobile Menu */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: "center" }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Desktop Menu */}
//           <Box
//             sx={{
//               flexGrow: 1,
//               display: { xs: "none", md: "flex" },
//               justifyContent: "center", // Centering the menu
//             }}
//           >
//             {pages.map((page) => (
//               <Box key={page} sx={{ display: "inline-block", marginX: 2 }}>
//                 <a
//                   href={`#${page.toLowerCase()}`}
//                   style={{
//                     color: "white",
//                     textDecoration: "none",
//                     fontSize: "16px",
//                     position: "relative",
//                     padding: "0 4px", // Optional for spacing
//                   }}
//                   className="nav-link"
//                 >
//                   {page} <ArrowDropDownIcon />
//                 </a>
//               </Box>
//             ))}
//           </Box>

//           {/* Get Started Button */}
//           {/* <Button
//             sx={{
//               background: "#fff",
//               ml: 2,
//               padding: "10px 30px", // Adjust padding for smaller screens
//               "&:hover": {
//                 backgroundColor: "#0056b3",
//                 color: "#fff",
//                 transition: ".4s",
//               },
//             }}
//           >
//             Get Started
//           </Button> */}
//           <Button
//               sx={{
//                 background: "#3895D3",
//                 color: "#fff",
//                 padding: "12px 40px",
//                 zIndex: 3, // Ensure button stays above overlay
//                 border: "2px solid #fff", // Initially no border, just transparent
//                 transition: "all 0.4s ease", // Smooth transition for all properties
//                 "&:hover": {
//                   backgroundColor: "#fff",
//                   color: "#3895D3",
//                   borderColor: "#3895D3", // Add border color on hover
//                   transform: "scale(1.05)", // Optional: Slightly increase size on hover for better effect
//                 },
//               }}
//             >
//               Get Started
//             </Button>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// export default Header;
"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined"; // IT-related logo icon
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Home", "Services", "About", "Portfolio", "Contact"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#3895D3", zIndex: 1300, padding: "10px 0px" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <ComputerOutlinedIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              fontSize: "2rem", // Adjust size of the icon
              color: "white",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#"
              sx={{
                color: "white",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                fontSize: { xs: "22px", sm: "26px" }, // Adjust font size based on screen size
              }}
            >
              Istosy<span>.</span>
            </Typography>
          </Box>

          {/* Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
              {/* Add Get Started Button in the mobile menu */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  sx={{
                    background: "#3895D3",
                    color: "#fff",
                    padding: "12px 40px",
                    zIndex: 3, // Ensure button stays above overlay
                    border: "2px solid #fff", // Initially no border, just transparent
                    transition: "all 0.4s ease", // Smooth transition for all properties
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#3895D3",
                      borderColor: "#3895D3", // Add border color on hover
                      transform: "scale(1.05)", // Optional: Slightly increase size on hover for better effect
                    },
                  }}
                >
                  Get Started 
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center", // Centering the menu
            }}
          >
            {pages.map((page) => (
              <Box key={page} sx={{ display: "inline-block", marginX: 2 }}>
                <a
                  href={`#${page.toLowerCase()}`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "16px",
                    position: "relative",
                    padding: "0 4px", // Optional for spacing
                  }}
                  className="nav-link"
                >
                  {page} <ArrowDropDownIcon />
                </a>
              </Box>
            ))}
          </Box>

          {/* Desktop Get Started Button */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              sx={{
                background: "#3895D3",
                color: "#fff",
                padding: "12px 40px",
                zIndex: 3, // Ensure button stays above overlay
                border: "2px solid #fff", // Initially no border, just transparent
                transition: "all 0.4s ease", // Smooth transition for all properties
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3895D3",
                  borderColor: "#3895D3", // Add border color on hover
                  transform: "scale(1.05)", // Optional: Slightly increase size on hover for better effect
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
