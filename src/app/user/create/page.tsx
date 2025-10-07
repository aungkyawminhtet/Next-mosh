'use client';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push("/user");
    }
  return (
    <div>
      <button onClick={handleClick} className='btn btn-primary rounded'>Back</button>
    </div>
  )
}

export default page
