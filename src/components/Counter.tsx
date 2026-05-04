import {useEffect, useState} from 'react'
import Button from './Button'

export default function Counter() {

    const [count, setCount] = useState<number>(0)

  const handleIncrement = ()=>{
    setCount(prev => prev+1)
  }
  
  const handleDecrement = ()=>{
      setCount(prev => prev-1)
    }

    const handleReset = ()=>{
      setCount(0)
    }

    useEffect(()=>{


    }, [count])

  return (

    <>
    <p>Count: {count}</p>
    <Button onCountChange={handleIncrement} buttonName='Increment'/>
    <Button onCountChange={handleDecrement} buttonName='Decrement'/>
    <Button onCountChange={handleReset} buttonName='Reset'/>
    </>
  )
}
