import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const TimelineItem = ({ year, title, description, side, delay = '0s' }) => {
  const isLeft = side === 'left';

  return (
    <Box
      className="fade-in-up" 
      style={{ transitionDelay: delay }}
      position="relative"
      width={{ base: '100%', md: '50%' }}
      pl={{ base: '60px', md: isLeft ? '40px' : '0' }}
      pr={{ base: '10px', md: isLeft ? '0' : '40px' }}
      py="10px"
      ml={{ md: isLeft ? '0' : '50%' }}
      _after={{
        content: '""',
        position: 'absolute',
        width: '18px', // Slightly smaller dot
        height: '18px',
        top: '28px', // Adjusted for alignment
        bg: 'brand.bg', // Background of the dot to match page bg
        border: '3px solid',
        borderColor: 'brand.accent',
        borderRadius: '50%',
        zIndex: 1,
        left: { base: '10px', md: isLeft ? 'auto' : '-9px' }, // Adjusted for dot size
        right: { base: 'auto', md: isLeft ? '-9px' : 'auto' }, // Adjusted for dot size
      }}
    >
      <VStack
        p={{base: 5, md: 6}}
        bg="brand.surface"
        borderWidth="1px"
        borderColor="brand.border"
        borderRadius="lg" // 8px
        alignItems="flex-start"
        spacing={2}
        transition="all 0.25s ease-out"
        _hover={{
          transform: 'translateY(-5px) scale(1.01)',
          boxShadow: `0 8px 25px -5px var(--chakra-colors-brand-accentGlow)`,
          borderColor: 'brand.accent'
        }}
      >
        <Text fontFamily="mono" fontSize={{base: "lg", md: "xl"}} fontWeight="600" color="brand.accent">
          {year}
        </Text>
        <Heading as="h3" size={{base: "xs", md: "sm"}} color="brand.textPrimary" fontWeight="600">
          {title}
        </Heading>
        <Text color="brand.textSecondary" fontSize={{base: "sm", md: "md"}}>
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default TimelineItem;
