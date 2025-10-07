import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-200 p-2 space-x-2 mb-2'>
      <Link className='' href={'/'}>Home</Link>
      <Link href={'/admin'}>Admin</Link>
      <Link href={'/user'}>User</Link>
    </div>
  );
}


export default Navbar
