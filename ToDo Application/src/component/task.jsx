import { useEffect, useState } from "react"

export default function Task()
{
    const [tasks, setTasks]=useState([]);
    const [event, setEvent]=useState("");
    
    useEffect(()=>{
        const storeitems=localStorage.getItem("tasks");
        if(storeitems){
            setTasks(JSON.parse(storeitems))
        }
    },[])

    
    useEffect(()=>{
        localStorage.setItem("tasks",JSON.stringify(tasks))
    },[tasks]);

    const addEvent=()=>{
        if(event===""){
            return;
        }
        const newtask={
            id:Date.now(),
            text:event,
            completed:false
        }
        setTasks([...tasks,newtask]);
        setEvent("");
    }
    const markCompleted=(set)=>{
        const updatedtasks=tasks.map((task)=>{
            if(task.id===set.id){
                return{
                    ...task,
                    completed:!task.completed
                };
            }
            return task;
        })
        setTasks(updatedtasks);

    }
    const completedtasks=tasks.filter((task)=>{
        return task.completed;
    }).length;
    
    const deleteEvent=(set)=>{
        const updatedlist=tasks.filter((task)=>{
            return task.id!==set.id;
        })
        // if(set.completed==true){
        // setDone(done-1);
        // }
        setTasks(updatedlist);
    }
    
    return(
        <div>
            <h2>
                Add To Task : 
            </h2>
            <br/>
            <p>Completed Tasks {completedtasks}</p>
            <input type="text" value={event} onChange={(e)=>setEvent(e.target.value)} placeholder="Enter Your Today's Task..."/>
            <button onClick={addEvent}>ADD</button>
            <ul>
                {tasks.map((task)=>{
                    return( 
                        <div >
                        <li key={task.id}>
                            <span>{task.text}</span>
                            <button onClick={()=>markCompleted(task)}>{task.completed? "UNDO":"Complete"}</button>
                            <button onClick={()=>deleteEvent(task)}>Delete</button>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}