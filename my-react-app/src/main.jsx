// first steps for creating root using createRoot then render and include div element
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "Ivan";

createRoot(document.getElementById('root')).render(
  <div>
    <h1>{name}'s Favorite Games</h1>
    <ul>
      <li>American Truck Simulator</li>
      <li>Helldivers 2</li>
      <li>Kingdom Come Deliverance 2</li>
    </ul>
  </div>
)
