import React from 'react';
import {
  Box,
  Heading,
  Text,
  LinkBox,
  LinkOverlay,
  Flex,
  Spacer,
  Icon,
  HStack
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '../assets/icon-arrow-right.svg?react';

/**
 * TutorialCard component
 * Displays a preview card for a tutorial or usage guide.
 * @param {object} props - Component props
 * @param {string} props.category - The category of the tutorial.
 * @param {string} props.title - The title of the tutorial.
 * @param {string} props.description - A short description of the tutorial.
 * @param {string} props.level - The difficulty level (e.g., 'Beginner').
 * @param {string} props.link - The URL path to the full tutorial.
 * @param {string} [props.delay] - Animation delay (e.g., '0.1s').
 */
const TutorialCard = ({ category, title, description, level, link, delay = '0s' }) => {
  return (
    <LinkBox
      as="article"
      p={8}
      bg="surface.base"
      borderWidth="1px"
      borderColor="border.base"
      borderRadius="xl" // 12px
      display="flex"
      flexDirection="column"
      className="fade-in-up" // For IntersectionObserver animation
      style={{ transitionDelay: delay }}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '0 0 25px var(--chakra-colors-accent-glow)',
        borderColor: 'accent.base',
      }}
    >
      <Text fontFamily="mono" color="green.base" fontSize="sm" mb={4}>
        {category}
      </Text>
      <Heading as="h3" size="md" mb={3} color="text.primary">
        <LinkOverlay as={RouterLink} to={link}>
          {title}
        </LinkOverlay>
      </Heading>
      <Text color="text.secondary" fontSize="md" mb={6} noOfLines={3} flexGrow={1}>
        {description}
      </Text>
      <Flex alignItems="center">
        <Text fontSize="sm" color="text.secondary">
          {level}
        </Text>
        <Spacer />
        {/* The LinkOverlay on title makes the whole card clickable to 'link'. 
            This HStack is for visual cue only. */}
        <HStack color="accent.base" fontWeight="600" spacing={1}>
            <Text>Read More</Text>
            <Icon as={ArrowRightIcon} w={4} h={4} />
        </HStack>
      </Flex>
    </LinkBox>
  );
};

export default TutorialCard;
