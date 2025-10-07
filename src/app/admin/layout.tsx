import React from 'react'

const AdminLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex'>
      <aside className='bg-slate-200 w-[20%]'>Side bar</aside>
      <main>{children}</main>
    </div>
  );
}

export default AdminLayout
