import React from 'react'

interface ButtonProps {
    buttonName: string;
    onCountChange: () => void;
}

export default function Button({buttonName, onCountChange}:ButtonProps) {
  return (
    <button onClick={onCountChange}>{buttonName}</button>
  )
}
