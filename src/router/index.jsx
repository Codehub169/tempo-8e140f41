import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'; // App.jsx contains the <Routes> and page structure

/**
 * AppRouter component.
 * This component wraps the main App component with BrowserRouter.
 * It provides the routing context needed for <Routes>, <Route>, <Link>, etc. to function.
 * The main application's ReactDOM.render (or createRoot().render) in main.jsx should use this component
 * as the root instead of directly rendering App, to ensure routing is available throughout the application.
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppRouter;
