// src/App.jsx
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <Home />;
}

export default App;