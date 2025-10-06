'use client '
import React from 'react'
import { motion } from "motion/react";

interface CardProps {
    id: number,
    name: string
}

const Card:React.FC<CardProps> = ({id,name}) => {
  return (
    <div
    className="w-[300px] h-[200px] border rounded bg-white"
    >
      <span className='text-black'>{id}. {name}</span>
      <button className='btn btn-neutral rounded'>click me</button>
    </div>
  )
}

export default Card
