import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

/**
 * TimelineItem component
 * Represents an event in a timeline, styled for alternating left/right layout.
 * @param {object} props - Component props
 * @param {string} props.year - The year of the event.
 * @param {string} props.title - The title of the event.
 * @param {string} props.description - A description of the event.
 * @param {'left' | 'right'} props.side - Determines the alignment on the timeline.
 * @param {string} [props.delay] - Animation delay (e.g., '0.1s').
 */
const TimelineItem = ({ year, title, description, side, delay = '0s' }) => {
  const isLeft = side === 'left';

  return (
    <Box
      className="fade-in-up" // For IntersectionObserver animation
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
        width: '20px',
        height: '20px',
        top: '25px',
        bg: 'bg.base',
        border: '3px solid',
        borderColor: 'accent.base',
        borderRadius: '50%',
        zIndex: 1,
        left: { base: '10px', md: isLeft ? 'auto' : '-10px' },
        right: { base: 'auto', md: isLeft ? '-10px' : 'auto' },
      }}
    >
      <VStack
        p={6}
        bg="surface.base"
        borderWidth="1px"
        borderColor="border.base"
        borderRadius="lg" // 8px
        alignItems="flex-start"
        spacing={2}
        transition="transform 0.3s ease, box-shadow 0.3s ease"
        _hover={{
          transform: 'translateY(-5px)',
          boxShadow: '0 0 25px var(--chakra-colors-accent-glow)',
        }}
      >
        <Text fontFamily="mono" fontSize="xl" fontWeight="600" color="accent.base">
          {year}
        </Text>
        <Heading as="h3" size="sm" color="text.primary">
          {title}
        </Heading>
        <Text color="text.secondary" fontSize="md">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

export default TimelineItem;
