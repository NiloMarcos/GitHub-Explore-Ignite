import React from 'react';
import Counter from './components/Counter';

import Home from './pages/Home';

import './styles/global.scss';

export function App() {
  return (
    <>
      <Home />
      <Counter />
    </>
  )
}