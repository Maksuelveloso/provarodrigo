// src/pages/PostList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setPosts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Posts
      </Typography>
      <List>
        {posts.map(post => (
          <Paper key={post.id} sx={{ mb: 2, p: 1 }}>
            <ListItemButton onClick={() => navigate(`/dados/${post.id}`)}>
              <ListItemText primary={post.title} />
            </ListItemButton>
          </Paper>
        ))}
      </List>
    </Container>
  );
}
