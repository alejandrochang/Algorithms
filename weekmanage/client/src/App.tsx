import { MantineProvider } from "@mantine/core";
import React from 'react';
import Navigation from './components/Navigation';
import Todos from "./components/Todos";
import './App.css';

function App() {

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navigation>Hello There</Navigation>
      <Todos />
    </MantineProvider>
  );
}

export default App
