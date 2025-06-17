import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  Icon,
  useColorModeValue, // Retained for potential future use, but specific colors are now from theme
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import ArticlePreviewCard from '../components/ArticlePreviewCard';
import { homeContent } from '../data/homeContent';

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

const HomePage = () => {
  useFadeInAnimation();
  const { hero, features, featuredArticles } = homeContent;

  // Colors are now primarily sourced from Chakra theme's 'brand' object

  return (
    <Layout>
      {/* Hero Section */}
      <Box 
        as="section" 
        pt={{ base: `calc(70px + 3rem)`, md: `calc(70px + 6rem)`}} 
        pb={{ base: '3rem', md: '6rem' }} 
        textAlign="center" 
        position="relative" 
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: '-50%', // Adjusted for a more subtle effect from top
          left: '0',
          right: '0',
          bottom: '0',
          bgImage: 'radial-gradient(ellipse at 50% 0%, var(--chakra-colors-brand-accentGlow) 0%, transparent 60%)',
          opacity: 0.6, // Slightly increased opacity for the glow
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        <Container maxW="container.xl">
          <Heading 
            as="h1" 
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }} 
            fontWeight="bold" 
            className="fade-in-up"
            color="brand.textPrimary" // Direct color, gradient removed for simplicity with new palette
            // bgGradient="linear(to-r, brand.textPrimary, brand.accent)" // Option for gradient
            // bgClip="text"
            mb={6}
          >
            {hero.title}
          </Heading>
          <Text 
            fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} 
            maxW={{base: "90%", md: "700px"}} 
            mx="auto" 
            my={{ base: 4, md: 6 }} 
            color="brand.textSecondary" 
            className="fade-in-up"
            style={{ transitionDelay: '0.1s' }}
          >
            {hero.subtitle}
          </Text>
          <Box className="fade-in-up" style={{ transitionDelay: '0.2s' }} mb={{ base: 10, md: 16}}>
            <Button as={RouterLink} to={hero.cta.link} variant="primary" size="lg">
              {hero.cta.text}
            </Button>
          </Box>
          <Box
            fontFamily="mono"
            bg="brand.surface" // Use surface for slightly lighter terminal bg
            border="1px solid" 
            borderColor="brand.border"
            borderRadius="lg" // Consistent with theme
            p={{base:4, md:6}}
            textAlign="left"
            maxW="650px"
            mx="auto"
            mt={{ base: 8, md: 12 }}
            boxShadow="0 15px 40px rgba(0,0,0,0.5)" // More pronounced shadow for depth
            className="fade-in-up"
            style={{ transitionDelay: '0.3s' }}
          >
            {hero.terminalLines.map((line, index) => (
              <HStack key={index} spacing={2} fontSize={{base: "xs", md: "sm"}}>
                {line.prompt && <Text color="brand.green" fontWeight="600">{line.prompt}</Text>}
                {line.text && <Text color="brand.textSecondary">{line.text}</Text>}
                {line.showCursor && <Box as="span" w="8px" h="1.2em" bg="brand.textPrimary" animation="blink 1s step-end infinite" />}
              </HStack>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box as="section" id="features" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <VStack spacing={5} textAlign="center" mb={{ base: 10, md: 16 }}>
            <Heading as="h2" fontSize={{base: "2xl", md: "3xl", lg: "4xl"}} className="fade-in-up">{features.title}</Heading>
            <Text color="brand.textSecondary" maxW="700px" mx="auto" className="fade-in-up" style={{ transitionDelay: '0.1s' }} fontSize={{base: "md", md: "lg"}}>
              {features.description}
            </Text>
          </VStack>
          <Grid 
            templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} 
            gap={{base: 6, md: 8}}
          >
            {features.items.map((item, index) => (
              <FeatureCard
                key={item.id}
                icon={item.icon} 
                title={item.title}
                description={item.description}
                link={item.link}
                delay={`${(index + 1) * 0.1}s`}
              />
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Articles Section */}
      <Box as="section" py={{ base: 12, md: 20 }} bg="brand.surface">
        <Container maxW="container.xl">
          <Heading as="h2" fontSize={{base: "2xl", md: "3xl", lg: "4xl"}} textAlign="center" mb={{ base: 10, md: 16 }} className="fade-in-up">
            {featuredArticles.title}
          </Heading>
          <VStack spacing={{base:6, md:8}} alignItems="stretch">
            {featuredArticles.articles.map((article, index) => (
              <ArticlePreviewCard
                key={article.id}
                category={article.category}
                title={article.title}
                description={article.description}
                link={`/article/${article.id}`}
                delay={`${(index + 1) * 0.1}s`}
              />
            ))}
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default HomePage;
