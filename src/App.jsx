// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>MY AI JOURNEY BEGINS</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        {/* 1st exercise */}
        <h3 className="year">The current year is {new Date().getFullYear()}</h3>
      </div>
      <Header />
    </>
  )
}

export default App