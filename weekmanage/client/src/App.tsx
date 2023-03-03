import { MantineProvider } from "@mantine/core";
import React from 'react';
import Navigation from './components/Navigation';
import './App.css';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      NavBar
      <Navigation />
    </MantineProvider>
  );
}

export default App
