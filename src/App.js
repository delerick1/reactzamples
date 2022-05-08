import './App.css'; 
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0) 
const increment = () => setCounter(counter + 4)
const decrement = () => setCounter(counter - 4)
  return (
    <>
     <div className = "App">
       <h2>{counter}</h2>
       <button onClick={decrement}>Decrease</button>

       <button onClick={increment}>Increase</button>
        </div>
     </>   
       
  )
 
}

export default App;