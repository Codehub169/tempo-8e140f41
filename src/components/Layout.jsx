import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Flex direction="column" minH="100vh" bg="bg.base">
      <Navbar />
      {/* Main content area */}
      {/* pt="nav" pushes content below the fixed Navbar */}
      <Box as="main" flexGrow={1} pt="nav">
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
