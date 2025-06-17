import React from 'react';
import { Box, Text, Container, VStack, Link, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa'; // Example icon

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="brand.bg" // Use darkest background for footer
      borderTopWidth="1px"
      borderColor="brand.border"
      py={{ base: 10, md: 14 }} 
      mt={20} 
    >
      <Container maxW="container.xl">
        <VStack spacing={3}>
          <Text fontSize="sm" color="brand.textSecondary">
            &copy; {new Date().getFullYear()} Linuxverse. A prototype for developers.
          </Text>
          <Text fontSize="xs" color="brand.textSecondary">
            Built with React, Chakra UI, and Tailwind CSS. Hosted on the Interwebs.
          </Text>
          <Link href="https://github.com/your-repo" isExternal color="brand.textSecondary" _hover={{color: "brand.accent"}} fontSize="sm">
            <Icon as={FaGithub} mr={1} verticalAlign="middle"/>
            View Source on GitHub
          </Link>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
