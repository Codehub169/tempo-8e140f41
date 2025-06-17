import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  List,
  ListItem,
  ListIcon,
  Icon
} from '@chakra-ui/react';
import IconCheckmark from '../assets/icon-checkmark.svg?react';
import IconPackage from '../assets/icon-package.svg?react';
import IconStar from '../assets/icon-star.svg?react';

const DistroCard = ({ logoSrc, name, description, targetAudience, packageManager, philosophy, delay = '0s' }) => {
  const features = [
    { icon: IconCheckmark, text: 'Target', value: targetAudience },
    { icon: IconPackage, text: 'Packages', value: packageManager }, // Renamed for clarity
    { icon: IconStar, text: 'Philosophy', value: philosophy },
  ];

  return (
    <Box
      bg="brand.surface"
      borderWidth="1px"
      borderColor="brand.border"
      borderRadius="xl" // 12px
      overflow="hidden"
      display="flex"
      flexDirection="column"
      h="100%" // Ensure cards in a grid have same height
      className="fade-in-up" 
      style={{ transitionDelay: delay }}
      transition="all 0.25s ease-out"
      _hover={{
        transform: 'translateY(-6px) scale(1.02)',
        boxShadow: `0 10px 30px -10px var(--chakra-colors-brand-accentGlow)`,
        borderColor: 'brand.accent'
      }}
    >
      <HStack p={6} borderBottomWidth="1px" borderColor="brand.border" spacing={4} bg="rgba(0,0,0,0.1)">
        {typeof logoSrc === 'string' ? (
          <Image src={logoSrc} alt={`${name} Logo`} boxSize={{base: "40px", md: "48px"}} objectFit="contain" />
        ) : (
          <Icon as={logoSrc} boxSize={{base: "40px", md: "48px"}} color="brand.textPrimary" /> 
        )}
        <Heading as="h3" size={{base: "md", md: "lg"}} color="brand.textPrimary" fontWeight="600">
          {name}
        </Heading>
      </HStack>

      <VStack p={6} alignItems="flex-start" spacing={4} flexGrow={1}>
        <Text color="brand.textSecondary" fontSize={{base: "sm", md: "md"}} mb={2}>
          {description}
        </Text>
        <List spacing={3} w="full">
          {features.map((feature) => (
            <ListItem key={feature.text} display="flex" alignItems="center">
              <ListIcon as={feature.icon} color="brand.accent" w={{base: "16px", md: "18px"}} h={{base: "16px", md: "18px"}} />
              <Text as="span" color="brand.textSecondary" fontSize={{base: "xs", md: "sm"}}>
                <Text as="strong" color="brand.textPrimary" fontWeight="500">{feature.text}:</Text> {feature.value}
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default DistroCard;
