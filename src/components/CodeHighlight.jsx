import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
// Ensure a PrismJS theme is imported in a global CSS file like src/index.css or src/main.jsx
// e.g., import 'prismjs/themes/prism-tomorrow.css';
import { Box } from '@chakra-ui/react';

/**
 * CodeHighlight component
 * Renders a block of code with syntax highlighting using PrismJS.
 * @param {object} props - Component props
 * @param {string} props.code - The code string to highlight.
 * @param {string} props.language - The language of the code (e.g., 'javascript', 'bash').
 */
const CodeHighlight = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <Box
      as="pre"
      bg="surface.base"
      borderWidth="1px"
      borderColor="border.base"
      borderRadius="lg" // 8px
      p={6}
      my={6}
      overflowX="auto"
      fontFamily="mono"
      fontSize="sm"
      sx={{
        // This ensures the <pre> tag itself doesn't get Prism's classes,
        // which can interfere with Chakra's styling if Prism's CSS is too aggressive.
        '& > code': {
          fontFamily: 'mono',
          fontSize: 'sm',
          // PrismJS themes typically set their own background/color on the <code> tag.
          // If needed, specific overrides can go here, but usually, the theme handles it.
          background: 'none !important', // Override Prism theme background on code if it's redundant with pre
          color: 'inherit', // Inherit color from pre, or let theme decide
        }
      }}
    >
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </Box>
  );
};

export default CodeHighlight;
