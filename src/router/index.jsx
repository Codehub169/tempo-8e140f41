import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App'; // App.jsx contains the page structure and individual page components
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';
import DifferencesPage from '../pages/DifferencesPage';
import UsagePage from '../pages/UsagePage';
import ArticlePage from '../pages/ArticlePage';

/**
 * AppRouter component.
 * This component defines all the routes for the application.
 * It uses BrowserRouter to enable routing capabilities.
 * The main App component (App.jsx) will then render the appropriate page component based on the current URL.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* The App component itself might contain a Layout (Navbar, Footer) 
            and then another <Routes> for page content, or pages handle their own layout. 
            For simplicity here, we assume App.jsx handles the main layout and 
            these routes define which primary page component is rendered within that layout.*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/differences" element={<DifferencesPage />} />
        <Route path="/usage" element={<UsagePage />} />
        <Route path="/article/:articleId" element={<ArticlePage />} />
        <Route path="/article" element={<ArticlePage />} /> {/* For default or non-ID article access */}
        {/* Fallback for 404 - Consider adding a specific NotFoundPage component */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
