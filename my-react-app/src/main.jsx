// first steps for creating root using createRoot then render and include div element
import { createRoot } from 'react-dom/client'
import './index.css'

const fName = "Ivan ";
const lName = "Rios";
const luckyNumber = Math.floor(Math.random() * 100);

createRoot(document.getElementById('root')).render(
  <div>
    <h1>My lucky number</h1>
    <p>{fName + lName}'s lucky number is {luckyNumber}!</p>
  </div>
)
