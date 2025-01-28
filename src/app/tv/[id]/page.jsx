import Showcase from '@/components/Showcase';
import React from 'react'

const page = async ({params}) => {
    const id = params.id
    const response = await fetch(
        `${process.env.BASE_URL}/tv/${params.id}?api_key=${process.env.API_KEY}`
      );    
      const tvResponse = await response.json();

  return (
    <div>
        <Showcase data={tvResponse} isMovie={false} />
    </div>
  )
}

export default page
