// 'use client'
// import { useParams } from 'next/navigation'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

interface Props {
    params: {slug: string[]}
}

const page = async() => {
  // const session = await getServerSession(authOptions);
  // console.log(session);
    // const {slug} = useParams();
  return (
    <div>
      <h1>Service page</h1>
      {/* <h1>Product id is - {slug}</h1> */}
    </div>
  )
}

export default page
