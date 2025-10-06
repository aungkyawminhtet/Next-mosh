'use client'
import React from 'react'
import { motion } from 'motion/react'

const Button = ({title}:{title: string}) => {
  return (
    <motion.button transition={{duration: 0.5}} whileHover={{scale: 1.1}} className='px-4 py-2 bg-blue-200 rounded font-semibold'>
      {title}
    </motion.button>
  )
}

export default Button
