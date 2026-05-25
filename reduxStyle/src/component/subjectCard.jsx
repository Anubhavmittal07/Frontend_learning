export function SubjectCard({subject,completed,onComplete,remove}){
    return(
        <div>
            <h1>{subject}</h1>
            {completed? (
                <h3>IsCompleted</h3>
            ):(
                <button onClick={()=>onComplete}>Complete</button>
            )}
            <button onClick={remove}>Delete</button>
        </div>
    )
}