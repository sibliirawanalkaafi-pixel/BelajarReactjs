import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let nama ="XI PPLG 1";
  let ucapan ="Selamat Pagi Sayang"

  return (
    <div>
    <h1>hallo, {nama}</h1>
    <p>{ucapan}</p>

    <button>Merubah nama</button>
    <button>Merubah ucapan</button>
    </div>
  )
}

export default App
