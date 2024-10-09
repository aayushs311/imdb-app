import React from 'react'
import useMovies from '../../hooks/useMovies'

const Movies = () => {

  const { result, page } = useMovies();
  console.log(result)

  return (
    <>
      
    </>
  )
}

export default Movies;