import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PostLanding from './components/PostLanding';
import Layout from './components/Layout';
import About from './components/About';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='post' element={<PostLanding />} />
        <Route path='about' element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;