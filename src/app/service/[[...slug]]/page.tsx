'use client'
import { useParams } from 'next/navigation'
import React from 'react'
interface Props {
    params: {slug: string[]}
}

const page = () => {
    const {slug} = useParams();
  return (
    <div>
      <h1>Product id is - {slug}</h1>
    </div>
  )
}

export default page
