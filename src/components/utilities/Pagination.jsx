"use client"
import React from 'react'
import Link from 'next/link'

const Pagination = ({page, url}) => {
  let curPage = Number(page)

  return (
    <div className='flex gap-8 justify-center items-center py-5'>
      <Link href={`${url}/${curPage - 1}`} className={`${curPage === 1 ? "hidden" : "block"} border px-3 py-1 rounded-md`} >Previous</Link>
      <p className='text-xl border px-2 rounded-full'>{page}</p>
      <Link href={`${url}/${curPage + 1}`} className='border px-8 py-1 rounded-md' >Next</Link>
    </div>
  )
}

export default Pagination
