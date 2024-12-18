import * as React from 'react';
import { Box, Button, Typography, Container } from '@mui/material';

function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fit-background&psig=AOvVaw0mhkK6klMnVQbe2xH_aO7Q&ust=1734611255109000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj76dOosYoDFQAAAAAdAAAAABAE")', // Replace with your own image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white', // Text color for contrast
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" sx={{ fontWeight: 700, mb: 2 }}>
          Welcome to Istosy
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Innovative IT Solutions to Boost Your Business
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#007BFF', // Blue background for the button
            color: 'white',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#0056b3', // Darker blue on hover
            },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}

export default Hero;

