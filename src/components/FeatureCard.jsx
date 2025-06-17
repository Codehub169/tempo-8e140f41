import React from 'react';
import { LinkBox, LinkOverlay, Heading, Text, Icon, VStack, Box } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const FeatureCard = ({ icon, title, description, link, delay }) => {
  return (
    <LinkBox
      as="article"
      p={{ base: 6, md: 8 }}
      bg="brand.surface"
      borderWidth="1px"
      borderColor="brand.border"
      borderRadius="xl" // Large border radius (12px equivalent)
      transition="all 0.25s ease-out"
      _hover={{
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: `0 10px 30px -10px var(--chakra-colors-brand-accentGlow)`,
        borderColor: 'brand.accent',
      }}
      opacity={0} 
      transform="translateY(20px)" 
      className="fade-in-up" 
      style={{ transitionDelay: delay || '0s' }} 
    >
      <VStack spacing={5} align="start" h="100%">
        {icon && <Icon as={icon} w={{base: "40px", md: "48px"}} h={{base: "40px", md: "48px"}} color="brand.accent" mb={2}/>}
        <Heading as="h3" size="md" color="brand.textPrimary" fontWeight="600">
          <LinkOverlay as={RouterLink} to={link}>
            {title}
          </LinkOverlay>
        </Heading>
        <Text color="brand.textSecondary" fontSize="md" flexGrow={1}>
          {description}
        </Text>
      </VStack>
    </LinkBox>
  );
};

export default FeatureCard;
