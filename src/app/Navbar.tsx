'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {status, data: session} = useSession();
  if (status === 'loading') return null;
  // console.log("object", session);
  return (
    <div className='flex bg-slate-200 p-2 space-x-2 mb-2'>
      <Link className='' href={'/'}>Home</Link>
      <Link href={'/admin'}>Admin</Link>
      <Link href={'/user'}>User</Link>
      <Link href={'/service'}>Service</Link>
      {status === 'authenticated' && <h1>{session.user?.name}</h1>}
      
      {status === 'authenticated' && <Link href={'/api/auth/signout'}>SignOut</Link>}
      {status === 'unauthenticated' && <Link href={'/api/auth/signin'}>Login</Link>}
    </div>
  );
}


export default Navbar
