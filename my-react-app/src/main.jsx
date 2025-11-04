
import { createRoot } from 'react-dom/client'
import './index.css'

const name = "Ivan";

createRoot(document.getElementById('root')).render(
  <div>
    <h1>{name}'s Favorite Games</h1>
    <ul>
      <li>American Truck Simulator</li>
      <li>Helldivers 2</li>
      <li>Halo 4</li>
    </ul>
  </div>
)
