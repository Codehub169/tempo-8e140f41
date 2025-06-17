import React from 'react';
import { Box, Text, Container, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="surface.base"
      borderTopWidth="1px"
      borderColor="border.base"
      py={{ base: 8, md: 12 }} // Responsive padding
      mt={16} // Margin to separate from content
    >
      <Container maxW="container.xl">
        <VStack spacing={2}>
          <Text fontSize="sm" color="text.secondary">
            &copy; {new Date().getFullYear()} Linuxverse. A prototype for developers.
          </Text>
          <Text fontSize="xs" color="text.secondary">
            Built with React, Chakra UI, and Tailwind CSS.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
