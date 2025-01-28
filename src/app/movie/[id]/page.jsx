import Showcase from '@/components/Showcase';
import React from 'react'

const page = async ({params}) => {
    const id = params.id
    const response = await fetch(
        `${process.env.BASE_URL}/movie/${params.id}?api_key=${process.env.API_KEY}`
      );    
      const movieResponse = await response.json();

  return (
    <div>
        <Showcase data={movieResponse} isMovie={true} />
    </div>
  )
}

export default page
