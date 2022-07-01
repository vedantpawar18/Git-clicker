import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Clicker = () => {
    const [count, setCount] = useState (0);
   
    useEffect (() =>{
        document.title=`clicked ${count} times`;
    })

  return (
    <div>
        <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  )
}

export default Clicker