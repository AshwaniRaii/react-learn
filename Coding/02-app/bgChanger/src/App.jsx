import { useState } from 'react'

function App() {
  const [colour, setColour] = useState("olive");
  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: colour }}>
      <div className='fixed flex flex-wrap bottom-6 justify-center inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-xl bg-white px-2 py-1 rounded-3xl'>
          <button onClick={()=> setColour("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=> setColour("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }}>green</button>
          <button onClick={()=> setColour("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }}>blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
