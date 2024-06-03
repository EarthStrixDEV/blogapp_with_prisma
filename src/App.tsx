import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Layout from './components/Layout';
import CreatePost from './Page/CreatePost';
import About from './Page/About';
import AdminPage from './Page/AdminPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='createPost' element={<CreatePost />} />
        <Route path='about' element={<About />} />
        <Route path='adminPage' element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;