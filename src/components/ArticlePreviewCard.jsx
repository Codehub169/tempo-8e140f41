import React from 'react';
import { Box, Heading, Text, LinkBox, LinkOverlay, Icon, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import ArrowRightIcon from '../assets/icon-arrow-right.svg?react';

const ArticlePreviewCard = ({ category, title, description, link, delay = '0s' }) => {
  return (
    <LinkBox
      as="article"
      p={{base: 6, md: 8}}
      bg="brand.surface"
      borderWidth="1px"
      borderColor="brand.border"
      borderRadius="xl" // 12px
      w="100%"
      className="fade-in-up" 
      style={{ transitionDelay: delay }}
      transition="all 0.25s ease-out"
      _hover={{
        transform: 'scale(1.03) translateY(-4px)',
        boxShadow: `0 8px 25px -5px var(--chakra-colors-brand-accentGlow)`,
        borderColor: 'brand.accent'
      }}
    >
      <Flex direction={{base: "column", sm: "row"}} alignItems={{base: "flex-start", sm: "center"}} gap={{base: 4, sm: 6}}>
        <Box flex={1}>
          <Text fontFamily="mono" color="brand.green" fontSize="sm" mb={2} fontWeight="500">
            {category.toUpperCase()}
          </Text>
          <Heading as="h3" size={{base: "sm", md: "md"}} mb={3} color="brand.textPrimary" fontWeight="600">
            <LinkOverlay as={RouterLink} to={link}>
              {title}
            </LinkOverlay>
          </Heading>
          <Text color="brand.textSecondary" fontSize={{base: "sm", md: "md"}} noOfLines={3}>
            {description}
          </Text>
        </Box>
        <Icon as={ArrowRightIcon} w={6} h={6} color="brand.textSecondary" transition="all 0.2s ease-out" _groupHover={{ color: 'brand.accent', transform: 'translateX(4px)'}} />
      </Flex>
    </LinkBox>
  );
};

export default ArticlePreviewCard;
