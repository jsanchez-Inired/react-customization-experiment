import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FETCH_STATUS, useOption} from "./utils/optionUtils.ts";

function App() {
  const [count, setCount] = useState(0);
  const [FOStatus,firstOption] = useOption<string>("first_option");

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            first option + counter is {firstOption ? Number.parseInt(firstOption) + count : count}
        </button>
          <p>
              first option is {firstOption}
              first option fetch status is {FETCH_STATUS[FOStatus]}
          </p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
