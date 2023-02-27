import { MantineProvider, Box } from "@mantine/core";
import React from 'react';
import './App.css';

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Box>Hello World 2</Box>
    </MantineProvider>
  );
}

export default App
