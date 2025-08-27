import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)
  let name = "kasyap"
  let founded=2015

  return (
    <>
      {/* <Greeting name={ name} founded={founded} />
      <h1>hello {name}</h1>
      <div>
        <p>welcome to my website</p>
      </div> */}
      <Greeting name={name} />
     
     
    </>
  )
}


export default App
