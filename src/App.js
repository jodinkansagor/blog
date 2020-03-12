import React from 'react';
import InventoryPage from './components/inventory/InventoryPage';
import ErrorBoundary from './components/ErrorBoundary';
import ColorContainer from './components/fave-colors/ColorContainer';
import SongContainer from './components/music.js/SongContainer';

export default function App() {
  return (
    <ErrorBoundary>
      <SongContainer />
    </ErrorBoundary>
  );
}

