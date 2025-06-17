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
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../assets/icon-menu-hamburger.svg';

const NavItem = ({ to, children }) => (
  <ChakraLink
    as={RouterNavLink}
    to={to}
    fontWeight="medium"
    color="text.secondary"
    position="relative"
    _hover={{
      color: 'text.primary',
      _after: { transform: 'scaleX(1)', transformOrigin: 'left' },
    }}
    _activeLink={{
      color: 'text.primary',
      _after: { transform: 'scaleX(1)', transformOrigin: 'left' },
    }}
    _after={{
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '100%',
      height: '2px',
      bgColor: 'accent.base',
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 0.3s ease',
    }}
    px={2}
    py={1}
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
      height="nav"
      zIndex="sticky"
      bg="rgba(10, 10, 10, 0.8)"
      backdropFilter="blur(10px)"
      borderBottomWidth="1px"
      borderColor="border.base"
    >
      <Flex
        as="nav"
        className="container"
        h="100%"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        px={{ base: 4, md: 6 }}
      >
        <ChakraLink as={RouterNavLink} to="/" _hover={{ textDecoration: 'none' }}>
          <Flex alignItems="center" gap="0.75rem">
            <Icon as={LogoIcon} w="32px" h="32px" color="accent.base" />
            <Text fontFamily="mono" fontSize="1.25rem" fontWeight="semibold" color="text.primary">
              Linuxverse
            </Text>
          </Flex>
        </ChakraLink>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} gap="2rem">
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
          color="text.primary"
          _hover={{ bg: 'surface.base' }}
        />
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="bg.base" color="text.primary">
          <DrawerCloseButton _hover={{bg: 'surface.base'}} _focus={{boxShadow: 'outline'}} />
          <DrawerHeader borderBottomWidth="1px" borderColor="border.base">
            Navigation
          </DrawerHeader>
          <DrawerBody>
            <VStack as="nav" spacing={6} align="stretch" mt={6}>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.name}
                  as={RouterNavLink}
                  to={link.path}
                  fontSize="lg"
                  fontWeight="medium"
                  color="text.secondary"
                  onClick={onClose} // Close drawer on link click
                  _hover={{ color: 'text.primary' }}
                  _activeLink={{ color: 'accent.base', fontWeight: 'bold'}}
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
