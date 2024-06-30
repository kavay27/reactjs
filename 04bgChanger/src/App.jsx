import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'
      >
        <div className='flex flex-wrap justify-center 
        gap-3 shadow-xl bg-white rounded-full px-3 py-2'>
          <button onClick={() => setColor("red")}
          className='outline-none px-3 py-1 rounded-full shadow-lg'
          style={{backgroundColor: 'red'}}
          >Red</button>
          <button onClick={() => setColor("green")}
          className='outline-none px-3 py-1 rounded-full shadow-lg'
          style={{backgroundColor: 'green'}}
          >Green</button>
          <button onClick={() => setColor("blue")}
          className='outline-none px-3 py-1 rounded-full shadow-lg'
          style={{backgroundColor: 'blue'}}
          >Blue</button>
          <button onClick={() => setColor("olive")}
          className='outline-none px-3 py-1 rounded-full shadow-lg'
          style={{backgroundColor: 'olive'}}
          >Olive</button>
          <button onClick={() => setColor("purple")}
          className='outline-none px-3 py-1 rounded-full shadow-lg'
          style={{backgroundColor: 'purple'}}
          >Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
