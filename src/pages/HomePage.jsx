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
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Layout from '../components/Layout';
import FeatureCard from '../components/FeatureCard';
import ArticlePreviewCard from '../components/ArticlePreviewCard';
import { homeContent } from '../data/homeContent';
import { FiTerminal } from 'react-icons/fi'; // Example icon for terminal

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

const HomePage = () => {
  useFadeInAnimation();
  const { hero, features, featuredArticles } = homeContent;

  const terminalBg = useColorModeValue('surface.base', 'surface.base');
  const terminalBorder = useColorModeValue('border.base', 'border.base');
  const terminalPromptColor = useColorModeValue('green.base', 'green.base');

  return (
    <Layout>
      {/* Hero Section */}
      <Box 
        as="section" 
        pt={{ base: `calc(70px + 4rem)`, md: `calc(70px + 8rem)`}} 
        pb={{ base: '4rem', md: '8rem' }} 
        textAlign="center" 
        position="relative" 
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bgImage: 'radial-gradient(circle at 50% 0, var(--chakra-colors-accent-glow), transparent 60%)',
          opacity: 0.5,
          zIndex: -1,
        }}
      >
        <Container maxW="container.xl">
          <Heading 
            as="h1" 
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} 
            fontWeight="bold" 
            className="fade-in-up"
            bgGradient="linear(to-r, text.primary, accent.base)"
            bgClip="text"
          >
            {hero.title}
          </Heading>
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }} 
            maxW="600px" 
            mx="auto" 
            my={{ base: 4, md: 6 }} 
            color="text.secondary" 
            className="fade-in-up"
            style={{ transitionDelay: '0.1s' }}
          >
            {hero.subtitle}
          </Text>
          <Box className="fade-in-up" style={{ transitionDelay: '0.2s' }}>
            <Button as={RouterLink} to="#features" variant="primary" size="lg">
              {hero.ctaText}
            </Button>
          </Box>
          <Box
            fontFamily="mono"
            bg={terminalBg}
            border="1px solid" 
            borderColor={terminalBorder}
            borderRadius="md"
            p={6}
            textAlign="left"
            maxW="600px"
            mx="auto"
            mt={{ base: 8, md: 12 }}
            boxShadow="0 10px 30px rgba(0,0,0,0.3)"
            className="fade-in-up"
            style={{ transitionDelay: '0.3s' }}
          >
            <HStack>
              <Text color={terminalPromptColor}>{hero.terminal.prompt}</Text>
              <Text>{hero.terminal.command}</Text>
            </HStack>
            <Text>{hero.terminal.output}</Text>
            <HStack>
              <Text color={terminalPromptColor}>{hero.terminal.prompt}</Text>
              <Box as="span" w="8px" h="1.2em" bg="text.primary" animation="blink 1s step-end infinite" />
            </HStack>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box as="section" id="features" py={{ base: 12, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center" mb={{ base: 10, md: 16 }}>
            <Heading as="h2" size="2xl" className="fade-in-up">{features.title}</Heading>
            <Text color="text.secondary" maxW="600px" mx="auto" className="fade-in-up" style={{ transitionDelay: '0.1s' }}>
              {features.description}
            </Text>
          </VStack>
          <Grid 
            templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} 
            gap={8}
          >
            {features.items.map((item, index) => (
              <FeatureCard
                key={item.id}
                icon={item.icon} // Assuming icon is a React component reference
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
      <Box as="section" py={{ base: 12, md: 24 }}>
        <Container maxW="container.xl">
          <Heading as="h2" size="2xl" textAlign="center" mb={{ base: 10, md: 16 }} className="fade-in-up">
            {featuredArticles.title}
          </Heading>
          <VStack spacing={8}>
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
