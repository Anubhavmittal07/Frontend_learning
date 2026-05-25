import { useState } from 'react'
import {SkillCard} from './component/SkillCard'
function App() {
  const [count, setCount] = useState(0)
   const [skills, setSkills] = useState([
    { id: 1, name: "HTML", done: false },
    { id: 2, name: "CSS", done: false },
    { id: 3, name: "JavaScript", done: false },
    { id: 4, name: "React", done: false },
    { id: 5, name: "Redux", done: false }
  ]);

  const completeSkill=(id)=>{
    const updatedSkill = skills.map((skill)=>{
      if(skill.id===id){
        return {...skill, done: true};
      }
      return skill;
    })
    setSkills(updatedSkill)
  }
  const completedCount=skills.filter((s)=>s.done==true).length

  return (
    <div>
      <h1>Skill Progress Tracker</h1>
      <h2>Completed Skills : {completedCount}</h2>
      {skills.map((skill)=>(
        <SkillCard 
          key={skill.id}
          skill={skill.name}
          complete={skill.done}
          onComplete={()=>completeSkill(skill.id)}
        />
      ))}
    </div>
  )
}

export default App
