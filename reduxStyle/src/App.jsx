import { useReducer } from 'react'
import { useState } from 'react'
import { SubjectCard } from './component/subjectCard'
import {reducer} from './component/reducer'
const initialState=[]

function App() {
  const [subject, setSubject] = useState("")
  const [subjects,dispatch] = useReducer(reducer, initialState)
  const handleAdd=()=>{
    const newsubject= {
      id: Date.now(),
      name:subject,
      done: false
    }
    dispatch({
      type:"ADD",
      payload: newsubject
    })
    setSubject("")
  }
  const handleCompletion=(id)=>{
    dispatch({
      type:"Complete",
      payload:id
    })
  }
  const handleDelete=(id)=>{
    dispatch({
      type:"Delete",
      payload:id
    })
  }
  const completedCount=subjects.filter((sub)=>sub.done).length;
  return (
    <div>
      <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      <button onClick={handleAdd}>Add</button>
      <br/><br/>
      <h3>Count of Subjects : {subjects.length}</h3>
      <h3>Completed Subjects : {completedCount}</h3>
      {subjects.map((sub)=>(
        <SubjectCard
          key={sub.id}
          subject={sub.name}
          completed={sub.done}
          onComplete={()=>handleCompletion(sub.id)}
          remove={()=>handleDelete(sub.id)}

        />
      ))}
    </div>
  )
}

export default App
