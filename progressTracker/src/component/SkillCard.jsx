
export function SkillCard({skill, complete, onComplete}){
    return(
        <div>
            <h1>{skill}</h1>
            {complete?(
                <h4>Completed</h4>
            ):(
                <button onClick={onComplete}>COMPLETE</button>
            )}
        </div>
    )
}