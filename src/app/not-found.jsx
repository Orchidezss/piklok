import React from 'react'
import Image from 'next/image'
import img404 from '../assets/404.png'
import Link from 'next/link'

const page = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center gap-2'>
      <Image src={img404} className='w-fit h-fit' alt='not found'/>
      <p>Please insert the right movie title/URL</p>
      <Link href="/" className='font-bold bg-primary px-5 py-3 rounded'>Back to Homepage</Link>
    </div>
  )
}

export default page
