// src/routes/AppRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import PostList from '../pages/PostList';
import PostDetails from '../pages/PostDetails';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/post" />} />
      <Route path="/post" element={<PostList />} />
      <Route path="/dados/:id" element={<PostDetails />} />
    </Routes>
  );
}
