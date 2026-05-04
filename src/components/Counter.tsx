import {useState} from 'react'
import Button from './Button'

export default function Counter() {

      const [count, setCount] = useState(0)

  const handleIncrement = ()=>{
    setCount(count+1)
  }

  const handleDecrement = ()=>{
    setCount(count-1)
  }

  return (

    <>
    <Button onCountChange={handleIncrement} buttonName='Increment'/>
    <Button onCountChange={handleDecrement} buttonName='Decrement'/>
    </>
  )
}
