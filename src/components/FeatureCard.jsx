import React from 'react';
import { LinkBox, LinkOverlay, Heading, Text, Icon, VStack, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, link, delay }) => {
  return (
    <LinkBox
      as="article"
      p={{ base: 6, md: 8 }} // Responsive padding
      bg="surface.base"
      borderWidth="1px"
      borderColor="border.base"
      borderRadius="xl" // Large border radius (12px equivalent)
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '0 0 25px var(--chakra-colors-accent-glow)', // Using CSS var for glow
        borderColor: 'accent.base',
      }}
      // Animation properties for fade-in-up effect (can be triggered by IntersectionObserver in parent)
      opacity={0} // Initially hidden for animation
      transform="translateY(30px)" // Initial position for animation
      className="fade-in-up" // Class for IntersectionObserver to target
      style={{ transitionDelay: delay || '0s' }} // Staggered animation delay
    >
      <VStack spacing={5} align="start">
        {icon && <Icon as={icon} w="48px" h="48px" color="accent.base" mb={2}/>}
        <Heading as="h3" size="md" color="text.primary">
          <LinkOverlay as={RouterLink} to={link}>
            {title}
          </LinkOverlay>
        </Heading>
        <Text color="text.secondary" fontSize="md">
          {description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export default FeatureCard;
