import { useState , useEffect} from 'react'

function App() {
  const [event, setevent] = useState("")
  const [tasks, settasks]=useState(()=>{
    const data=JSON.parse(localStorage.getItem("tasks"));
    return data?data:[];
  });
  // useEffect(()=>{
  //   const data=JSON.parse(localStorage.getItem("tasks"));
  //   if(data){
  //     settasks(data)
  //   }
  // },[])
  const addtask=()=>{
    if(event.trim()===""){return;}
    settasks([...tasks,event]);
    setevent("")
  }
  const deletetask=(ind)=>{
    const updatedtask=tasks.filter((t,i)=>i!==ind);
    settasks(updatedtask)
  }
//   useEffect(() => {
//   alert("Mounted");
// }, []);
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks])

  
  return (
    <div>
      <h1>Add Task</h1>
      <input type='text' value={event} placeholder='Add your task here' onChange={(e)=>setevent(e.target.value)}></input>
      <button onClick={
        addtask
      }>ADD</button>
      <ul>
        {tasks.map((t,i)=>(
          <li key={i}>{t}
          <button onClick={()=>deletetask(i)}>Delete</button></li>
        ))}
      </ul>
      <button onClick={()=>settasks([])}>Clear Tasks</button>
    </div>
  )
}

export default App
