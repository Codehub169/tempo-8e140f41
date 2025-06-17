import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import DifferencesPage from './pages/DifferencesPage';
import UsagePage from './pages/UsagePage';
import ArticlePage from './pages/ArticlePage';
// Placeholder for AboutPage if it gets added
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Flex direction="column" minH="100vh" bg="brand.bg"> {/* Using brand.bg from Chakra theme */}
        <Navbar />
        {/* Main content wrapper div */}
        <Box as="main" flexGrow={1} pt="nav"> {/* 'nav' should be a theme token for Navbar height */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/differences" element={<DifferencesPage />} />
            <Route path="/usage" element={<UsagePage />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
            {/* A generic article route for linking from non-dynamic parts if needed, or for a default article */}
            <Route path="/article" element={<ArticlePage />} /> 
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* Consider adding a 404 Not Found page later */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Box>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;
