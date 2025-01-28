import React, { useEffect, useState } from 'react'
import useMovies from '../../hooks/useMovies'
import { Grid2,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Pagination
} from '@mui/material';

const Movies = () => {

  const { results, page, totalPages, handleChange } = useMovies();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")));
  }, []);

  const handleClick = (movie) => {

    const favoriteMovies = [...(favorites ?? []), movie];
    localStorage.setItem("favorites", JSON.stringify(favoriteMovies));
    setFavorites(favoriteMovies);

  }


  return (
    <>
      <Grid2 container spacing={2} className="flex justify-center">
        {
          results &&
          !!results.length &&
          results.map(result => {
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
                  <Button size="small" onClick={() => handleClick(result)}>Add to FavList</Button>
                  <Button size="small">Add to WatchList</Button>
                </CardActions>
              </Card>
            )
          })
        }
      </Grid2>
      <Grid2 className="flex justify-center p-7">
        <Pagination count={totalPages} page={page} color='primary' onChange={(e, value) => handleChange(value)}/>
      </Grid2>
    </>
  )
}

export default Movies;