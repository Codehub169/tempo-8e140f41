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
  HStack,
  Tag
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '../assets/icon-arrow-right.svg?react';

const TutorialCard = ({ category, title, description, level, link, delay = '0s' }) => {
  return (
    <LinkBox
      as="article"
      p={{base:6, md:8}}
      bg="brand.surface"
      borderWidth="1px"
      borderColor="brand.border"
      borderRadius="xl" // 12px
      display="flex"
      flexDirection="column"
      h="100%" // Ensure cards in a grid have same height
      className="fade-in-up" 
      style={{ transitionDelay: delay }}
      transition="all 0.25s ease-out"
      _hover={{
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: `0 10px 30px -10px var(--chakra-colors-brand-accentGlow)`,
        borderColor: 'brand.accent',
      }}
    >
      <Text fontFamily="mono" color="brand.green" fontSize="xs" mb={3} fontWeight="600">
        {category.toUpperCase()}
      </Text>
      <Heading as="h3" size={{base: "sm", md: "md"}} mb={3} color="brand.textPrimary" fontWeight="600">
        <LinkOverlay as={RouterLink} to={link}>
          {title}
        </LinkOverlay>
      </Heading>
      <Text color="brand.textSecondary" fontSize={{base: "sm", md: "md"}} mb={6} noOfLines={4} flexGrow={1}>
        {description}
      </Text>
      <Flex alignItems="center" mt="auto">
        <Tag size="sm" variant="outline" colorScheme={level === 'Beginner' ? 'green' : level === 'Intermediate' ? 'yellow' : 'red'} color={level === 'Beginner' ? 'brand.green' : level === 'Intermediate' ? 'yellow.400' : 'red.400'} borderColor={level === 'Beginner' ? 'brand.green' : level === 'Intermediate' ? 'yellow.400' : 'red.400'}>
            {level}
        </Tag>
        <Spacer />
        <HStack color="brand.accent" fontWeight="600" spacing={1} fontSize="sm">
            <Text>Read More</Text>
            <Icon as={ArrowRightIcon} w={4} h={4} />
        </HStack>
      </Flex>
    </LinkBox>
  );
};

export default TutorialCard;
