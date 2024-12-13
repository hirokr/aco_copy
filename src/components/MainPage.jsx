import Image from 'next/image'
import React from 'react'

const MainPage = () => {
  return (
    <div className='mb-10 h-[100vh]'>
      <div className='h-full w-full top-0'>
        <Image
          src='/main-bg-4.jpeg'
          alt='bg main'
          fill
          className='object-cover'
        />
      </div>
    </div>
  )
}

export default MainPage
