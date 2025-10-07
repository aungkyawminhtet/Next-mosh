// 'use client'
// import { useParams } from 'next/navigation'
import React from 'react'

interface photoProps {
    params: {
        id : string,
        photoId : string
    }
}

const page = ({params: {id, photoId}}: photoProps) => {
    // const {id, photoId} = useParams();
  return (
    <div>
      <h1>User id is - {id} and photo id is - {photoId}</h1>
    </div>
  )
}

export default page
