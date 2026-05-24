import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [recent, setRecent] = useState("")
  const [activity,setActivity] = useState([])
  useEffect(()=>{
    const tips=[
      "Drink More Water",
      "Sleep Early",
      "Exarcise Daily",
      "Read every day",
      "Meditation reduces stress"
    ]
    const randind=Math.floor(Math.random()*tips.length)
    setRecent(tips[randind])
  })
  const trackactivity=(r)=>{
    const time=new Date().toLocaleString()
    const newact={
      r,
      time
    }
    setActivity([
      
      newact,
      ...activity
    ])
    if(r=="Overslept" || r=="SkippedRoutine"){setCount(0)}
    else{
      setCount(count+1)
    }
  }
  const resettracker=()=>{
    setCount(0)
    setActivity([])
  }
  return (
    <div>
      <h1>
        Life Sync Wellness Tracker
      </h1>
      <h1>Daily Tip : {recent}</h1>
      <h2>Current Streak : {count}</h2>
      <button onClick={()=>trackactivity("Meditation")} >Meditation</button>
      <button onClick={()=>trackactivity("Exercise")}>Exercise</button>
      <button onClick={()=>trackactivity("Reading")}>Reading</button>
      <button onClick={()=>trackactivity("Overslept")}>Overslept</button>
      <button onClick={()=>trackactivity("SkippedRoutine")}>Skipped Routine</button>
      <br/><br/>
      <button onClick={resettracker}>Reset</button>
      <br/>
      <br/>
      {activity && (
        <div>
          {activity[0] &&(<h3>Latest Activity : {activity[0].r}</h3>)}
          </div>
      )}
      
      <ul>
        {activity.slice(0,5).map((event,id)=>(
          <li key={id}>
            {event.r} - {event.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
