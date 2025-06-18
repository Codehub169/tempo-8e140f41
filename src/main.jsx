import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.jsx';
import './index.css';

// Extend the theme to include custom fonts and colors from Tailwind/Design System
const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Fira Code', monospace`,
  },
  colors: {
    brand: {
      bg: '#0a0a0a',          // --color-bg
      surface: '#141414',      // --color-surface
      border: '#262626',      // --color-border
      textPrimary: '#f5f5f5', // --color-text-primary
      textSecondary: '#a3a3a3',// --color-text-secondary
      accent: '#00aaff',       // --color-accent
      accentGlow: 'rgba(0, 170, 255, 0.3)', // --color-accent-glow
      green: '#00ff9d',        // --color-green
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'brand.bg',
        color: 'brand.textPrimary',
        fontFamily: 'body',
        lineHeight: '1.6',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'heading',
        color: 'brand.textPrimary',
      },
      p: {
        color: 'brand.textSecondary',
        marginBottom: '1rem',
      },
      a: {
        color: 'brand.accent',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
          textDecorationColor: 'brand.accentGlow',
          textUnderlineOffset: '3px',
        },
      },
      code: {
        fontFamily: 'mono',
        backgroundColor: 'brand.surface',
        color: 'brand.green',
        padding: '0.2em 0.4em',
        borderRadius: '4px',
        fontSize: '0.9em',
      },
      pre: {
        fontFamily: 'mono',
        backgroundColor: 'brand.surface',
        border: '1px solid',
        borderColor: 'brand.border',
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        overflowX: 'auto',
        fontSize: '0.95rem',
      },
    }),
  },
  components: {
    Container: {
      baseStyle: {
        maxW: '1120px', // --container-width
        px: { base: '1rem', md: '1.5rem' }, 
      },
    },
    Button: {
      variants: {
        primary: {
          bg: 'brand.accent',
          color: 'brand.bg',
          fontWeight: '600',
          borderRadius: '8px',
          px: '1.5rem',
          py: '0.75rem',
          boxShadow: '0 0 20px var(--chakra-colors-brand-accentGlow)', // Using Chakra's way to reference theme color
          _hover: {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 30px var(--chakra-colors-brand-accentGlow)',
          }
        }
      }
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
