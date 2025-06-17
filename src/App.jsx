import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import HistoryPage from './pages/HistoryPage';
import DifferencesPage from './pages/DifferencesPage';
import UsagePage from './pages/UsagePage';
import ArticlePage from './pages/ArticlePage';
// Placeholder for AboutPage if it gets added
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
