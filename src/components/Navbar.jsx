import React from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import LogoIcon from '../assets/logo.svg?react';
import MenuIcon from '../assets/icon-menu-hamburger.svg?react';

const NavItem = ({ to, children }) => (
  <ChakraLink
    as={RouterNavLink}
    to={to}
    fontWeight="500" // Slightly bolder
    color="brand.textSecondary"
    position="relative"
    py={2}
    px={3}
    borderRadius="md"
    transition="all 0.2s ease-in-out"
    _hover={{
      color: 'brand.textPrimary',
      bg: 'brand.surface',
      textDecoration: 'none',
      _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left', width: '60%' },
    }}
    _activeLink={{
      color: 'brand.accent',
      fontWeight: '600',
      _after: { transform: 'scaleX(1)', transformOrigin: 'bottom left', width: '60%', bgColor: 'brand.accent' },
    }}
    _after={{
      content: '""',
      position: 'absolute',
      bottom: '0px',
      left: '50%',
      transform: 'translateX(-50%) scaleX(0)',
      width: '0%',
      height: '2px',
      bgColor: 'brand.accent',
      transformOrigin: 'bottom center',
      transition: 'all 0.3s ease-in-out',
    }}
  >
    {children}
  </ChakraLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'History', path: '/history' },
    { name: 'Differences', path: '/differences' },
    { name: 'Usage', path: '/usage' },
  ];

  return (
    <Box
      as="header"
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="nav" // From theme
      zIndex="sticky"
      bg="rgba(15, 23, 42, 0.85)" // brand.bg with transparency
      backdropFilter="blur(12px)"
      borderBottomWidth="1px"
      borderColor="brand.border"
    >
      <Flex
        as="nav"
        className="container" // Should use Chakra's Container component or props for consistency
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        <ChakraLink as={RouterNavLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Flex alignItems="center" gap="0.75rem">
            <Icon as={LogoIcon} w={{base: "28px", md: "32px"}} h={{base: "28px", md: "32px"}} color="brand.accent" />
            <Text fontFamily="mono" fontSize={{base: "1.1rem", md: "1.25rem"}} fontWeight="semibold" color="brand.textPrimary">
              Linuxverse
            </Text>
          </Flex>
        </ChakraLink>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={{ base: "0.5rem", lg: "1rem"}} alignItems="center">
          {navLinks.map((link) => (
            <NavItem key={link.name} to={link.path}>
              {link.name}
            </NavItem>
          ))}
        </Flex>

        {/* Mobile Navigation Toggle */}
        <IconButton
          aria-label="Open navigation menu"
          icon={<Icon as={MenuIcon} w={6} h={6} />}
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="ghost"
          color="brand.textPrimary"
          _hover={{ bg: 'brand.surface' }}
          _active={{ bg: 'brand.border' }}
        />
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg="brand.bg" color="brand.textPrimary">
          <DrawerCloseButton _hover={{bg: 'brand.surface'}} _focus={{boxShadow: 'outline'}} />
          <DrawerHeader borderBottomWidth="1px" borderColor="brand.border">
            Navigation
          </DrawerHeader>
          <DrawerBody>
            <VStack as="nav" spacing={5} align="stretch" mt={8}>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.name}
                  as={RouterNavLink}
                  to={link.path}
                  fontSize="lg"
                  fontWeight="medium"
                  color="brand.textSecondary"
                  onClick={onClose} // Close drawer on link click
                  py={2}
                  px={3}
                  borderRadius="md"
                  _hover={{ color: 'brand.textPrimary', bg: 'brand.surface', textDecoration: 'none' }}
                  _activeLink={{ color: 'brand.accent', fontWeight: 'bold'}}
                >
                  {link.name}
                </ChakraLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
