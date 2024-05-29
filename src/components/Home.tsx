import React from 'react'
import PostLanding from './PostLanding'

function Home() {
  return (
    <div className='flex flex-col justify-center items-center bg-background w-full'>
      <div className='flex flex-col justify-center bg-button w-[800px] h-[300px] mt-24 my-5 rounded-se-3xl rounded-bl-3xl'>
        <h1 className='text-center text-6xl text-primary'>ยินดีต้อนรับ ผู้ใช้ใหม่</h1>
      </div>
      <div className='container my-2 mx-auto'>
        <PostLanding />
      </div>
    </div>
  )
}

export default Home