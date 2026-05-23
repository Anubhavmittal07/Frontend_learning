import { useState, useEffect } from 'react'


function App() {
  const [List, setList] = useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setList(data))
  })
  const [search,setSearch] = useState("")
  const filterdevents=List.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase())
)
  return (
    <div>
      <input type='text' value={search} placeholder='Type to Search' onChange={(e)=>setSearch(e.target.value)}></input>
      <ul>
        {filterdevents.map((item,ind)=>(
          <li key={ind}>{item.name}</li>
        ))}
      </ul>
      <br/>
        
    </div>
  )
}

export default App
