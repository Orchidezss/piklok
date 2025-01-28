import React from 'react'
import Link from 'next/link'
import { CiCircleMore } from "react-icons/ci";

const MovieListHeader = ({HeaderTtl, ListLink}) => {
  return (
    <div className='container flex justify-between mt-[52px]'>
      <h1 className='text-xl font-semibold'>{HeaderTtl}</h1>
      <Link href={`/${ListLink}`} className='flex items-center gap-2'>See More <CiCircleMore /></Link>
    </div>
  )
}

export default MovieListHeader
