import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import TimelineItem from '../components/TimelineItem';
import { historyContent } from '../data/historyContent';

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

const HistoryPage = () => {
  useFadeInAnimation();
  const { pageInfo, timelineEvents } = historyContent;

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

      {/* Timeline Section */}
      <Box as="section" py={{ base: 12, md: 16 }}>
        <Container maxW="800px" position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            width: '3px',
            bgColor: 'border.base',
            top: 0,
            bottom: 0,
            left: { base: '20px', md: '50%' },
            ml: { base: 0, md: '-1.5px' },
            zIndex: -1,
          }}
        >
          <VStack spacing={{ base: 8, md: 0}} align="stretch">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.id}
                year={event.year}
                title={event.title}
                description={event.description}
                side={index % 2 === 0 ? 'left' : 'right'}
                delay={`${index * 0.1}s`}
              />
            ))}
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default HistoryPage;
