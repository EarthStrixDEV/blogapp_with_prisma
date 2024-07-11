import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Layout from './components/Layout';
import CreatePost from './Page/CreatePost';
import About from './Page/About';
import AdminPage from './Page/AdminPage';
import EditPost from './Page/EditPost';
import Login from './Page/Login';
import Register from './Page/Register';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='createPost' element={<CreatePost />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='adminPage/:adminKey' element={<AdminPage />} />
        <Route path='editPost/:postId' element={<EditPost />} />
      </Route>
    </Routes>
  );
}

export default App;