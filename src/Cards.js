// src/App.js
import React from 'react';
import { Typography, Grid, Box, Rating, Card, CardContent, CardMedia } from '@mui/material';

function Cards() {
  return (
    <div>
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="WildRObo.jpg" // Replace with your image URL
                alt="WildRobot"
              />
              <CardContent>
                <Typography variant="h6">WildRobo</Typography>
                <Rating name="rating1" defaultValue={3} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="Venom.jpg" // Replace with your image URL
                alt="Venom"
              />
              <CardContent>
                <Typography variant="h6">Venom</Typography>
                <Rating name="rating2" defaultValue={4} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="Survive.jpg" // Replace with your image URL
                alt="Servive"
              />
              <CardContent>
                <Typography variant="h6">Servive</Typography>
                <Rating name="rating3" defaultValue={5} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="WildRObo.jpg" // Replace with your image URL
                alt="WildRobot"
              />
              <CardContent>
                <Typography variant="h6">WildRobo</Typography>
                <Rating name="rating1" defaultValue={3} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="Venom.jpg" // Replace with your image URL
                alt="Venom"
              />
              <CardContent>
                <Typography variant="h6">Venom</Typography>
                <Rating name="rating2" defaultValue={4} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="500"
                image="Survive.jpg" // Replace with your image URL
                alt="Servive"
              />
              <CardContent>
                <Typography variant="h6">Servive</Typography>
                <Rating name="rating3" defaultValue={5} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>


    </div>
  );
}

export default Cards;
