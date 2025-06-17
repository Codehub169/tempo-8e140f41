import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  useColorModeValue,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import CodeHighlight from '../components/CodeHighlight';
import articles from '../data/articlesContent'; // Corrected: default import

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

const ArticlePage = () => {
  useFadeInAnimation();
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching article data
    // In a real app, this might be an API call
    setLoading(true);
    let foundArticle = articles.find(art => art.id === articleId);
    
    // If no articleId is provided in URL (e.g. /article), load a default or first article
    if (!articleId && articles.length > 0) {
        foundArticle = articles.find(art => art.id === 'mastering-the-command-line') || articles[0]; 
    }

    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      setArticle(null); // Explicitly set to null if not found
    }
    setLoading(false);
  }, [articleId]);

  const textColor = useColorModeValue('text.secondary', 'text.secondary');
  const headingColor = useColorModeValue('text.primary', 'text.primary');
  const accentColor = useColorModeValue('accent.base', 'accent.base');
  // const codeBg = useColorModeValue('surface.base', 'surface.base'); // Not directly used in this component anymore

  if (loading) {
    return (
      <Layout>
        <Container maxW="800px" py={10} centerContent>
          <Spinner size="xl" color="accent.base" />
          <Text mt={4}>Loading article...</Text>
        </Container>
      </Layout>
    );
  }

  if (!article) {
    // If article is explicitly null (not found after loading)
    return (
        <Layout>
            <Container maxW="800px" py={10} centerContent>
                <Alert status="error">
                    <AlertIcon />
                    Article not found. You might be redirected or please check the URL.
                </Alert>
                 {/* Optional: Redirect to a 404 page or homepage */}
                 {/* <Navigate to="/404" replace /> */}
            </Container>
        </Layout>
    );
  }

  const renderContent = (contentItem) => {
    switch (contentItem.type) {
      case 'paragraph':
        return <Text mb={6} color={textColor} dangerouslySetInnerHTML={{ __html: contentItem.text }} />;
      case 'heading':
        return <Heading as={`h${contentItem.level}`} size={contentItem.level === 2 ? 'xl' : 'lg'} mt={10} mb={4} pb={2} borderBottom="1px solid" borderColor="border.base" color={headingColor}>{contentItem.text}</Heading>;
      case 'list':
        return (
          <VStack as="ul" spacing={2} alignItems="flex-start" mb={6} pl={5}>
            {contentItem.items.map((item, index) => (
              <HStack as="li" key={index} alignItems="flex-start">
                <Text color={accentColor} mr={2} as="span">
                  	&rarr;
                </Text>
                <Text color={textColor} dangerouslySetInnerHTML={{ __html: item }} />
              </HStack>
            ))}
          </VStack>
        );
      case 'code':
        return <CodeHighlight language={contentItem.language} code={contentItem.code} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Box as="main" pt={{ base: `calc(70px + 2rem)`, md: `calc(70px + 4rem)`}} pb={16}>
        <Container maxW="800px">
          <Box as="header" pb={8} mb={8} borderBottom="1px solid" borderColor="border.base" className="fade-in-up">
            {article.category && (
              <Tag size="lg" variant="subtle" colorScheme="green" fontFamily="mono" mb={4} color="green.base">
                {article.category}
              </Tag>
            )}
            <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} lineHeight="1.2" mb={4} color={headingColor}>
              {article.title}
            </Heading>
            <HStack spacing={4} fontSize="sm" color={textColor}>
              <Text>By {article.author}</Text>
              <Text>Published on {article.date}</Text>
              <Text>{article.readTime}</Text>
            </HStack>
          </Box>

          <Box className="article-content fade-in-up" style={{transitionDelay: '0.2s'}}>
            {article.content.map((item, index) => (
              <Box key={index}>{renderContent(item)}</Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default ArticlePage;
