import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ErrorAlert from '../ErrorAlert';
import Loading from '../Loading';
import Navbar from '../Navbar';

const ReelsView = () => {
  const [reels, setReels] = useState([
    {
      _id: '1',
      url: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
      user: { username: 'user1' },
      likes: 120,
      comments: 45,
    },
    {
      _id: '2',
      url: 'https://www.youtube.com/embed/3JZ_D3ELwOQ?autoplay=1',
      user: { username: 'user2' },
      likes: 200,
      comments: 78,
    },
    {
      _id: '3',
      url: 'https://youtube.com/shorts/hWTZp5CKzXE?feature=shared',
      user: { username: 'user3' },
      likes: 150,
      comments: 60,
    },
    {
      _id: '4',
      url: 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1',
      user: { username: 'user4' },
      likes: 300,
      comments: 90,
    },
    {
      _id: '5',
      url: 'https://www.youtube.com/embed/2Vv-BfVoq4g?autoplay=1',
      user: { username: 'user5' },
      likes: 250,
      comments: 110,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentReel, setCurrentReel] = useState(0);
  const reelsRef = useRef([]);

  const handleScroll = (event) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    const newIndex = Math.min(Math.max(currentReel + direction, 0), reels.length - 1);
    if (newIndex !== currentReel) {
      setCurrentReel(newIndex);
      reelsRef.current[newIndex].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentReel]);

  return (
    <Container sx={{ height: '100vh', overflowY: 'hidden' }}>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorAlert error={error} />
      ) : (
        <Box>
          {reels.map((reel, index) => (
            <Card
              key={reel._id}
              sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
              ref={(el) => (reelsRef.current[index] = el)}
            >
              <CardMedia
                component="iframe"
                src={currentReel === index ? reel.url : ''}
                title="Reel Video"
                sx={{ height: '80vh' }}
                allow="autoplay"
                style={{ display: currentReel === index ? 'block' : 'none' }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Added by: {reel.user.username}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Likes: {reel.likes}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Comments: {reel.comments}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default ReelsView;