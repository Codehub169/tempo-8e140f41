import React from 'react';
import { Box, Text, Container, VStack, Link, Icon, HStack } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa6'; // Changed from 'react-icons/fa' to 'react-icons/fa6'

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="brand.surface" // Corrected: Use theme token path
      borderTopWidth="1px"
      borderColor="brand.border" // Corrected: Use theme token path
      py={{ base: 8, md: 12 }} // Responsive padding
      mt={16} // Margin to separate from content
    >
      <Container maxW="container.xl">
        <VStack spacing={3}>
          <Text fontSize="sm" color="brand.textSecondary"> {/* Corrected: Use theme token path */}
            &copy; {new Date().getFullYear()} Linuxverse. A prototype for developers.
          </Text>
          <Text fontSize="xs" color="brand.textSecondary"> {/* Corrected: Use theme token path */}
            Built with React, Chakra UI, and Tailwind CSS.
          </Text>
          <Link 
            href="https://github.com/your-username/your-repo-name" 
            isExternal 
            color="brand.textSecondary" // Corrected: Use theme token path
            _hover={{ color: 'brand.accent', textDecoration: 'none' }} // Corrected: Use theme token path
          >
            <HStack spacing={1}>
              <Icon as={FaGithub} />
              <Text fontSize="xs">View on GitHub</Text> {/* Inherits color from Link */}
            </HStack>
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
