import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
// Recommended: Import a PrismJS theme in `src/index.css` or `src/main.jsx`
// e.g., import 'prismjs/themes/prism-okaidia.css'; // A good dark theme
import { Box } from '@chakra-ui/react';

const CodeHighlight = ({ code, language }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  // Using Chakra's global pre/code styles defined in main.jsx
  // The `language-xxx` class will be used by PrismJS if a theme is imported.
  return (
    <Box
      as="pre" // Chakra styles for 'pre' will apply from global theme
      className={`language-${language}`} // PrismJS needs this for theming
      my={6} // Margin consistent with theme paragraph spacing
      // Other styles like bg, border, padding, fontFamily, fontSize are handled by global pre style
    >
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </Box>
  );
};

export default CodeHighlight;
