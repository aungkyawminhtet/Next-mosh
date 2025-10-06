import React from 'react'
import ScrollLinked from '../components/TestMotion'
import ScrollTriggered from '../components/Scroll'

const page = () => {
  return (
    <div>
      <h1>Motion page</h1>
      <ScrollTriggered />
      <ScrollLinked />
    </div>
  )
}

export default page
