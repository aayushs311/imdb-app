import React, { useEffect, useState } from 'react'
import { Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Pagination
} from '@mui/material';

const FavList = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  const removeHandleClick = (movie) => {

  }

  return (
    <Grid2 container spacing={2} className="flex justify-center">
      {
        favorites &&
        !!favorites.length &&
        favorites.map(result => {
          return (
            <Card sx={{ maxWidth: 345 }} key={result.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                title={result.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {result.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {result.overview}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => removeHandleClick(result)}>Remove from FavList</Button>
                {/* <Button size="small">Add to WatchList</Button> */}
              </CardActions>
            </Card>
          )
        })
      }
    </Grid2>

  )
}

export default FavList