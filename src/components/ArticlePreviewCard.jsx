import React from 'react';
import { Box, Heading, Text, LinkBox, LinkOverlay, Icon, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '../assets/icon-arrow-right.svg?react';

/**
 * ArticlePreviewCard component
 * Displays a preview of an article, linking to the full article page.
 * @param {object} props - Component props
 * @param {string} props.category - The category of the article.
 * @param {string} props.title - The title of the article.
 * @param {string} props.description - A short description of the article.
 * @param {string} props.link - The URL path to the full article.
 * @param {string} [props.delay] - Animation delay (e.g., '0.1s').
 */
const ArticlePreviewCard = ({ category, title, description, link, delay = '0s' }) => {
  return (
    <LinkBox
      as="article"
      p={8}
      bg="surface.base"
      borderWidth="1px"
      borderColor="border.base"
      borderRadius="xl" // 12px
      className="fade-in-up" // For IntersectionObserver animation
      style={{ transitionDelay: delay }}
      transition="all 0.3s ease"
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '0 8px 30px var(--chakra-colors-blackAlpha-200)', // Equivalent to rgba(0,0,0,0.2)
        borderColor: 'accent.base'
      }}
    >
      <Flex direction="row" alignItems="center" gap={8}>
        <Box flex={1}>
          <Text fontFamily="mono" color="green.base" fontSize="sm" mb={2}>
            {category}
          </Text>
          <Heading as="h3" size="md" mb={2} color="text.primary">
            <LinkOverlay as={RouterLink} to={link}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text color="text.secondary" fontSize="md" noOfLines={3}>
            {description}
          </Text>
        </Box>
        <Icon as={ArrowRightIcon} w={6} h={6} color="text.primary" />
      </Flex>
    </LinkBox>
  );
};

export default ArticlePreviewCard;
