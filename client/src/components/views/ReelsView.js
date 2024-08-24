import { Box, Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ErrorAlert from '../ErrorAlert';
import Loading from '../Loading';
import Navbar from '../Navbar';

const ReelsView = () => {
  const [reels, setReels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axios.get('/api/reels');
        setReels(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching reels');
        setLoading(false);
      }
    };

    fetchReels();
  }, []);

  return (
    <Container>
      <Navbar />
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorAlert error={error} />
      ) : (
        <Box>
          <Typography variant="h4" gutterBottom>
            Reels
          </Typography>
          {reels.map((reel) => (
            <Card key={reel._id} sx={{ mb: 2 }}>
              <CardMedia
                component="iframe"
                src={reel.url}
                title="Reel Video"
                sx={{ height: 300 }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Added by: {reel.user.username}
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