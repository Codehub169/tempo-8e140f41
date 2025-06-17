import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Removed Navigate
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Spinner,
  Alert,
  AlertIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { ChevronRightIcon } from '@chakra-ui/icons'; // For breadcrumbs
import Layout from '../components/Layout';
import CodeHighlight from '../components/CodeHighlight';
import articles from '../data/articlesContent'; 

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
    setLoading(true);
    let foundArticle = articles.find(art => art.id === articleId);
    
    if (!articleId && articles.length > 0) {
        foundArticle = articles.find(art => art.id === 'mastering-the-command-line') || articles[0]; 
    }

    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      setArticle(null); 
    }
    setLoading(false);
  }, [articleId]);

  // Colors are derived from theme's brand object in main.jsx

  if (loading) {
    return (
      <Layout>
        <Container maxW="800px" py={20} centerContent>
          <Spinner size="xl" color="brand.accent" thickness="4px" speed="0.65s" />
          <Text mt={6} fontSize="lg" color="brand.textSecondary">Loading article...</Text>
        </Container>
      </Layout>
    );
  }

  if (!article) {
    return (
        <Layout>
            <Container maxW="800px" py={20} centerContent>
                <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px" borderRadius="lg" bg="brand.surface">
                    <AlertIcon boxSize="40px" mr={0} color="red.400" />
                    <Text fontSize="xl" mt={4} mb={2} fontWeight="bold" color="brand.textPrimary">Article Not Found</Text>
                    <Text color="brand.textSecondary">The requested article could not be located.</Text>
                </Alert>
            </Container>
        </Layout>
    );
  }

  const inlineCodeStyles = {
    fontSize: '0.85em',
    bg: 'brand.surface',
    color: 'brand.green',
    px:'0.4em',
    py:'0.15em',
    borderRadius:'md'
  };

  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'paragraph':
        return <Text key={index} mb={6} color="brand.textSecondary" dangerouslySetInnerHTML={{ __html: contentItem.text }} sx={{ '& a': { color: 'brand.accent', fontWeight: '500', _hover: { textDecoration: 'underline'} }, '& strong': { color: 'brand.textPrimary', fontWeight: '600'}, '& code': inlineCodeStyles }} />;
      case 'heading':
        return <Heading key={index} as={`h${contentItem.level}`} fontSize={contentItem.level === 2 ? {base: 'xl', md:'2xl'} : {base: 'lg', md: 'xl'}} mt={10} mb={4} pb={2} borderBottom="1px solid" borderColor="brand.border" color="brand.textPrimary">{contentItem.text}</Heading>;
      case 'list':
        return (
          <VStack as="ul" key={index} spacing={3} alignItems="flex-start" mb={6} pl={5}>
            {contentItem.items.map((item, idx) => (
              <HStack as="li" key={idx} alignItems="flex-start" spacing={3}>
                <Text color="brand.accent" mr={1} mt={1} as="span" fontSize="lg">
                  &bull; {/* Using a bullet point, styled by Text color */}
                </Text>
                <Text color="brand.textSecondary" dangerouslySetInnerHTML={{ __html: item }} sx={{ '& a': { color: 'brand.accent', fontWeight: '500', _hover: { textDecoration: 'underline'} }, '& strong': { color: 'brand.textPrimary', fontWeight: '600'}, '& code': inlineCodeStyles }} />
              </HStack>
            ))}
          </VStack>
        );
      case 'code':
        return <CodeHighlight key={index} language={contentItem.language} code={contentItem.code} />;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Box as="article" pt={{ base: `calc(70px + 2rem)`, md: `calc(70px + 3rem)`}} pb={16}>
        <Container maxW="800px">
          <Breadcrumb spacing="8px" separator={<Icon as={ChevronRightIcon} color="brand.textSecondary" />} mb={6} fontSize="sm" className="fade-in-up">
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/" color="brand.textSecondary" _hover={{color: "brand.accent"}}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              {/* Link to a category page or UsagePage if applicable */}
              <BreadcrumbLink as={RouterLink} to={article.category === 'Command Line' || article.category === 'Software' || article.category === 'Scripting' ? "/usage" : "/"} color="brand.textSecondary" _hover={{color: "brand.accent"}}>
                {article.category || 'Articles'}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href={`/article/${article.id}`} color="brand.textPrimary" fontWeight="500">{article.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Box as="header" pb={6} mb={8} borderBottom="1px solid" borderColor="brand.border" className="fade-in-up" style={{transitionDelay: '0.1s'}}>
            {article.category && (
              <Tag size="md" variant="subtle" bg="brand.surface" fontFamily="mono" mb={4} color="brand.green" fontWeight="500" px={3} py={1}>
                {article.category.toUpperCase()}
              </Tag>
            )}
            <Heading as="h1" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} lineHeight="1.3" mb={5} color="brand.textPrimary">
              {article.title}
            </Heading>
            <HStack spacing={4} fontSize={{base: "xs", md: "sm"}} color="brand.textSecondary">
              <Text>By {article.author}</Text>
              <Text>&bull;</Text>
              <Text>Published on {article.date}</Text>
              <Text>&bull;</Text>
              <Text>{article.readTime}</Text>
            </HStack>
          </Box>

          <Box className="article-content fade-in-up" style={{transitionDelay: '0.2s'}}>
            {article.content.map((item, index) => renderContent(item, index))}
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default ArticlePage;
