import Hero from '@/components/Hero'
import MovieListMovies from '@/components/MovieListMovies'
import MovieListHeader from '@/components/MovieListHeader'
import React from 'react'
import MovieListTV from '@/components/MovieListTV'
const apiKey = process.env.API_KEY
const baseURL = process.env.BASE_URL

const page = async () => {
  const popularResponse = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}`)
  const popularMoviesRes = await popularResponse.json()
  const popularMovies = popularMoviesRes.results

  const tvResponse = await fetch(`${baseURL}/tv/popular?api_key=${apiKey}`)
  const tvRes = await tvResponse.json()
  const tv = tvRes.results

  const heroThumbnail = popularMovies.slice(-3); 

  const randomMovie = popularMoviesRes.results[Math.floor(Math.random() * popularMoviesRes.results.length)];


  

  return (
    <div>
      <Hero thumbnail={heroThumbnail} backdrop={randomMovie}/>
      <MovieListHeader HeaderTtl='Popular Movies' ListLink="popular-movies/1"/>
      <MovieListMovies movies={popularMovies}/>
      <MovieListHeader HeaderTtl='Upcoming Movies' ListLink="movie-upcoming"/>
      <MovieListTV movies={tv}/>
    </div>
  )
}

export default page
