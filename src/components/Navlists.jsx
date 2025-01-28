import React from 'react'
import Link from 'next/link'

const Navlists = ({isMenu}) => {
  return (
    <div>
      <ul className={`${isMenu ? "flex flex-col align-center gap-y-3 text-xl" : "lg:flex gap-3 hidden"}`}>
          <li className='text-center'>
            <Link href="/">Home</Link>
          </li>
          <li className='text-center'>
            <Link href="/popular-movies/1">Movies</Link>
          </li>
          <li className='text-center'>
            <Link href="/tvshows/1">Tv Shows</Link>
          </li>
          <li className='text-center'>
            <Link href="/popular-movies/1">Popular</Link>
          </li>
        </ul>
    </div>
  )
}

export default Navlists
