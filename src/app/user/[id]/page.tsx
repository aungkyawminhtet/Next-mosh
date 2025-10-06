// 'use client'
// import { useParams } from 'next/navigation'
import React from 'react'

const page = ({params: {id}}: {params: {id : string}}) => {
    // const {id} = useParams();
  return (
    <div>
      <h1>User id is - {id}</h1>
    </div>
  )
}

export default page
