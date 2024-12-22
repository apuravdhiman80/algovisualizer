import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PrimsVisualizer from './components/PrimsVisualizer';
import BinarySearchVisualizer from './components/BinarySearchVisualizer';
import TarjanVisualizer from './components/TarjanVisualizer';
import KnapsackVisualizer from './components/KnapsackVisualizer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prims" element={<PrimsVisualizer />} />
        <Route path="/binary-search" element={<BinarySearchVisualizer />} />
        <Route path="/tarjan" element={<TarjanVisualizer />} />
        <Route path="/knapsack" element={<KnapsackVisualizer />} />
      </Routes>
    </Router>
  );
};

export default App;
