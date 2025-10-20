'use client'
import React, { useState } from 'react'
import _ from 'lodash';
// import HeavyComponent from '../components/HeavyComponent';
import dynamic from 'next/dynamic';
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const page = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <h1>about page</h1>
      <button onClick={() => setActive(!active)}>show</button>
      {active && <HeavyComponent />}
    </div>
  )
}

export default page
