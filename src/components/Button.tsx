import React from 'react'

interface ButtonProps {
    onCountChange: () => void;
}

export default function Button({ onCountChange}:ButtonProps) {
  return (
    <button onClick={()=> onCountChange}></button>
  )
}
