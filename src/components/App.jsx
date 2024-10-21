import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { baseTheme } from '@chakra-ui/theme';
import TheRestOfYourApplication from './TheRestOfYourApplication';  // Import your main application component

// Optionally extend the base theme if needed
const theme = extendTheme(baseTheme);

function App() {
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  );
}

export default App;