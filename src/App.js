import React from 'react';
import InventoryPage from './components/inventory/InventoryPage';
import ErrorBoundary from './components/ErrorBoundary';
import ColorContainer from './components/fave-colors/ColorContainer';
import SongContainer from './components/music.js/SongContainer';
import MovieContainer from './components/movies/MovieContainer';
import MoviePage from './components/moviesFunction/MoviePage';

const Header = () => {
  return <h1>Let's play with React!</h1>
}

export default function App() {
  return (
    <>
    <Header />
    <ErrorBoundary>
      <MoviePage />
    </ErrorBoundary>
    </>
  );
}

