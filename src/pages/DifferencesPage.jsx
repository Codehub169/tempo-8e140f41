import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import DistroCard from '../components/DistroCard';
import { distrosContent } from '../data/distrosContent';

// Helper for Intersection Observer animations
const useFadeInAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

const DifferencesPage = () => {
  useFadeInAnimation();
  const { pageInfo, distros } = distrosContent;

  const pageHeaderBg = useColorModeValue(
    'linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, var(--chakra-colors-bg-base) 100%), radial-gradient(ellipse at top center, var(--chakra-colors-accent-glow), transparent 70%)',
    'linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, var(--chakra-colors-bg-base) 100%), radial-gradient(ellipse at top center, var(--chakra-colors-accent-glow), transparent 70%)'
  );

  return (
    <Layout>
      {/* Page Header */}
      <Box 
        as="header" 
        pt={{ base: `calc(70px + 3rem)`, md: `calc(70px + 5rem)`}} 
        pb={{ base: '3rem', md: '4rem' }} 
        textAlign="center" 
        borderBottom="1px solid" 
        borderColor="border.base"
        bg={pageHeaderBg}
      >
        <Container maxW="container.xl" className="fade-in-up">
          <Heading as="h1" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold">
            {pageInfo.title}
          </Heading>
          <Text 
            fontSize={{ base: 'md', md: 'lg' }} 
            color="text.secondary" 
            maxW="700px" 
            mx="auto" 
            mt={4}
          >
            {pageInfo.description}
          </Text>
        </Container>
      </Box>

      {/* Comparison Section */}
      <Box as="section" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Grid 
            templateColumns={{ base: '1fr', md: 'repeat(auto-fit, minmax(320px, 1fr))' }} 
            gap={8}
          >
            {distros.map((distro, index) => (
              <DistroCard
                key={distro.id}
                logoSrc={distro.logoSrc} // This expects a component or string path from data
                name={distro.name}
                description={distro.description}
                targetAudience={distro.targetAudience}
                packageManager={distro.packageManager}
                philosophy={distro.philosophy}
                delay={`${(index + 1) * 0.1}s`}
              />
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default DifferencesPage;
