import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App.jsx';
import './index.css';

// Extend the theme to include custom fonts and colors
const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Fira Code', monospace`,
  },
  colors: {
    brand: {
      bg: '#0F172A',          // Slate 900
      surface: '#1E293B',      // Slate 800
      border: '#334155',      // Slate 700
      textPrimary: '#F1F5F9', // Slate 100
      textSecondary: '#94A3B8',// Slate 400
      accent: '#38BDF8',       // Sky 400
      accentGlow: 'rgba(56, 189, 248, 0.4)', // Sky 400 with increased opacity for glow
      green: '#22C55E',        // Green 500
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'brand.bg',
        color: 'brand.textPrimary',
        fontFamily: 'body',
        lineHeight: '1.7',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      'h1, h2, h3, h4, h5, h6': {
        fontFamily: 'heading',
        color: 'brand.textPrimary',
        fontWeight: '700',
      },
      p: {
        color: 'brand.textSecondary',
        marginBottom: '1.25rem',
        lineHeight: '1.7',
      },
      a: {
        color: 'brand.accent',
        textDecoration: 'none',
        _hover: {
          textDecoration: 'underline',
          textDecorationColor: 'brand.accent',
          textUnderlineOffset: '4px',
          color: 'brand.textPrimary' // Link text becomes brighter on hover
        },
      },
      code: {
        fontFamily: 'mono',
        backgroundColor: 'brand.surface',
        color: 'brand.green',
        padding: '0.25em 0.5em',
        borderRadius: '6px',
        fontSize: '0.9em',
      },
      pre: {
        fontFamily: 'mono',
        backgroundColor: 'brand.surface',
        border: '1px solid',
        borderColor: 'brand.border',
        borderRadius: 'lg', // 10px
        padding: '1.5rem',
        marginBottom: '1.75rem',
        overflowX: 'auto',
        fontSize: '0.95rem',
        lineHeight: '1.5',
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
          color: 'brand.bg', // Text color for primary button
          fontWeight: '600',
          borderRadius: 'lg', // 10px
          px: '2rem',
          py: '1rem',
          fontSize: 'md',
          boxShadow: '0 4px 15px var(--chakra-colors-brand-accentGlow)', 
          transition: 'all 0.2s ease-out',
          _hover: {
            bg: 'brand.textPrimary', // Hover background
            color: 'brand.accent', // Hover text color
            transform: 'translateY(-3px) scale(1.03)',
            boxShadow: '0 8px 25px var(--chakra-colors-brand-accentGlow)',
          },
          _active: {
            transform: 'translateY(-1px) scale(1.01)',
            boxShadow: '0 4px 15px var(--chakra-colors-brand-accentGlow)',
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
