import React from 'react'

const loading = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center flex-col gap-2 text-center'>
        <div className='loading'></div>
        <p>Wait a moment</p>
    </div>
    
  )
}

export default loading
