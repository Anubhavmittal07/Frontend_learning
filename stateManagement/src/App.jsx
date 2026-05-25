import { useState } from 'react'
import { useReducer } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const products = [
    {
      id:1,
      name:"laptop",
      price:30000
    },
    {
      id:2,
      name:"mobile",
      price:10000
    }
    ,{
      id:3,
      name:"headphone",
      price:3000
    },
    {
      id:4,
      name:"charger",
      price:300
    }
  ]

  return (
    <div>
      {products.map((item,ind)=>(
        <li key={ind}>
          <h2>Item : {item.name}</h2>
          <h3>Price : {item.price}</h3>
          <button onClick={()=>addToCart}>Add</button>
        </li>

      ))}
    </div>
  )
}

export default App
