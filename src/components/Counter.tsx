import {useState} from 'react'
import Button from './Button'

export default function Counter() {

    const [count, setCount] = useState<number>(0)

  const handleIncrement = ()=>{
    setCount(count+1)
  }
  
  const handleDecrement = ()=>{
      setCount(count-1)
    }

    const handleReset = ()=>{
      setCount(0)
    }

  return (

    <>
    <p>Count: {count}</p>
    <Button onCountChange={handleIncrement} buttonName='Increment'/>
    <Button onCountChange={handleDecrement} buttonName='Decrement'/>
    <Button onCountChange={handleReset} buttonName='Reset'/>
    </>
  )
}
