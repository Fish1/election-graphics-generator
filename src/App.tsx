import type { Component } from 'solid-js';

import { Route, Routes } from '@solidjs/router';
import Home from './pages/Home';
import About from './pages/About';
import Versus from './pages/versus/Versus';

const App: Component = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/versus" element={<Versus />} />
    </Routes>
  );
};

export default App;
