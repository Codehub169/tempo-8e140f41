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

/**
 * DistroCard component
 * Displays information about a Linux distribution.
 * @param {object} props - Component props
 * @param {string | React.ElementType} props.logoSrc - Source URL for the distro logo or an imported SVG component.
 * @param {string} props.name - Name of the distribution.
 * @param {string} props.description - Short description of the distro.
 * @param {string} props.targetAudience - Target audience of the distro.
 * @param {string} props.packageManager - Package manager used by the distro.
 * @param {string} props.philosophy - Core philosophy of the distro.
 * @param {string} [props.delay] - Animation delay (e.g., '0.1s').
 */
const DistroCard = ({ logoSrc, name, description, targetAudience, packageManager, philosophy, delay = '0s' }) => {
  const features = [
    { icon: IconCheckmark, text: 'Target', value: targetAudience },
    { icon: IconPackage, text: 'Package Manager', value: packageManager },
    { icon: IconStar, text: 'Philosophy', value: philosophy },
  ];

  return (
    <Box
      bg="surface.base"
      borderWidth="1px"
      borderColor="border.base"
      borderRadius="xl" // 12px
      overflow="hidden"
      display="flex"
      flexDirection="column"
      className="fade-in-up" // For IntersectionObserver animation
      style={{ transitionDelay: delay }}
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: '0 0 25px var(--chakra-colors-accent-glow)',
        borderColor: 'accent.base'
      }}
    >
      <HStack p={6} borderBottomWidth="1px" borderColor="border.base" spacing={4}>
        {typeof logoSrc === 'string' ? (
          <Image src={logoSrc} alt={`${name} Logo`} boxSize="48px" objectFit="contain" />
        ) : (
          <Icon as={logoSrc} boxSize="48px" color="currentColor" /> // Ensure SVG inherits color if needed or set explicitly
        )}
        <Heading as="h3" size="lg" color="text.primary">
          {name}
        </Heading>
      </HStack>

      <VStack p={6} alignItems="flex-start" spacing={4} flexGrow={1}>
        <Text color="text.secondary" fontSize="md">
          {description}
        </Text>
        <List spacing={3} w="full">
          {features.map((feature) => (
            <ListItem key={feature.text} display="flex" alignItems="center">
              <ListIcon as={feature.icon} color="accent.base" w="18px" h="18px" />
              <Text as="span" color="text.secondary" fontSize="sm">
                <Text as="strong" color="text.primary" fontWeight="500">{feature.text}:</Text> {feature.value}
              </Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
};

export default DistroCard;
