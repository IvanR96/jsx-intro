// first steps for creating root using createRoot then render and include div element
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "Ivan";
const luckyNumber = 35;

createRoot(document.getElementById('root')).render(
  <div>
    <h1>My lucky number</h1>
    <p>{name}'s lucky number is {luckyNumber}!</p>
  </div>
)
