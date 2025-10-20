'use client'
// import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Metadata } from 'next';
import HeavyComponent from '@/app/components/HeavyComponent';
import dynamic from 'next/dynamic';
const HeavyComponentDynamic = dynamic(() => import('@/app/components/HeavyComponent'),
{
  ssr: false,
  loading: () => <p>Loading...</p>
}
);

interface Props {
    params: {slug: string[]}
}

const page = () => {

  const [active, setActive] = useState(false);

  // const session = await getServerSession(authOptions);
  // console.log(session);
    // const {slug} = useParams();
  return (
    <div>
      <h1>Service page</h1>
      <button onClick={() => setActive(!active)}>show</button>
      {/* <h1>Product id is - {slug}</h1> */}
      {active && <HeavyComponent />}
    </div>
  )
}

export default page

// export const metedata: Metadata = {
//   title: "Service Page",
//   description: "This is service page",
// }

// export async function generateMetadata({params}: Props): Promise<Metadata>{
//   const data = await fetch('');
//   const title = data.name || "Service Page";
//   return {
//     title: title,
//     description: "This is service page"
//   }
// }
