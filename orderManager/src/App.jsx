import { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)
  // const itemname="Pizza"
  // const price="200"
  const products = [
    {
      id : 1,
      name : "pizza",
      price : "200",
      q : 1
    },
    {
      id : 2,
      name : "burger",
      price : "100",
      q : 1
    },
    {
      id : 3,
      name : "pasta",
      price : "300",
      q : 1
    },
    {
      id : 4,
      name : "dosa",
      price : "400",
      q : 1
    }
  ]
  const [addeditem, setAdded] = useState([]) 

  const addItem=(prod)=>{
    const exists = addeditem.some((item,ind)=>item.id===prod.id
    )
    if(exists){
      return;
      }
  setAdded([
    ...addeditem,
    prod
  ])
  }

  // const handleQuantity=(val)=>{
  //   if(val=="Inc"){if(count<10){setCount(count+1)}}
  //   else{if(count>1){setCount(count-1)}}
  // }

  const incQuantity=(id)=>{
    const updateditems = addeditem.map((item)=>{
      if(item.id===id && item.q<10){
        return{
          ...item,
          q: item.q+1
        }
      }
      return item
    })
    setAdded(updateditems)
  }

  const decQuantity=(id)=>{
    const updateditems = addeditem.map((item)=>{
      if(item.id===id && item.q>1){
        return{
          ...item,
          q: item.q-1
        }
      }
      return item
    })
    setAdded(updateditems)
  }
  const total=addeditem.reduce((acc,curr)=>(acc+(curr.price * curr.q)),0);

  return (
    <div>
      <h1>Quick Bite Order Manager</h1>
      <br/><br/>

      {/* <h3>Item : {itemname}</h3>
      <h3>Price : {price}</h3>
      <h3>Quantity : {count}</h3> */}

      <li>
        {products.map((item,id)=>(
          <div>
          <ul key={id}>
            <h3>Item : {item.name}</h3>
            <h3>Price : {item.price}</h3>
            
            <button onClick={()=>addItem(item)}>Add</button>
          </ul>
          
          </div>
        ))}
      </li>
        <br/>
      {/* <button onClick={()=>handleQuantity("Inc")}>Increase Quantity</button>
      <button onClick={()=>handleQuantity("Dec")}>Decrease Quantity</button>
      <br/><br/>
      <h3>Total Price : {price*count}</h3> */}
      <h2>Added Items </h2>
      <ul>
        {addeditem.map((item,id)=>(
          <li key={id}>
            <h3>Item : {item.name}</h3><h3>Price : {item.price}</h3>
            <h3>Quantity : {item.q}</h3>
            <button onClick={()=>incQuantity(item.id)}>Increase Quantity</button>
            <button onClick={()=>decQuantity(item.id)}>Decrease Quantity</button>

          </li>
        ))}
      </ul>
      <h2>Total Price : {total}</h2>
      


    </div>
  )
}

export default App
