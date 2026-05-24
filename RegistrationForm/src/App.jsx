import { useState,useEffect } from 'react'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [contact, setContact] = useState("")

  const [course, setCourse] = useState("")

  useEffect(()=>{
    const data1=localStorage.getItem("name")
    const data2=localStorage.getItem("email")
    const data3=localStorage.getItem("contact")
    const data4=localStorage.getItem("course")

    if(data1){setName(data1)}
    if(data2){setEmail(data2)}
    if(data3){setContact(data3)}
    if(data4){setCourse(data4)}

  },[])

  useEffect(()=>{
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("contact",contact)
    localStorage.setItem("course",course)

  },[name,email,contact,course])

  const [saveddata,setdata] = useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault();
    const event={name, email, contact, course}
    setdata(event)
    // localStorage.setItem("submitted", true)
    alert("Student Registered Successfully")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name : </label>
        <input type='text' placeholder="' Anubhav Mittal '" value={name} onChange={(e)=>(setName(e.target.value))}/>
        <br/><br/>
        <label>Email : </label>
        <input type='email' placeholder='e.g. example@gmail.com' value={email} onChange={(e)=>(setEmail(e.target.value))}/>
        <br/><br/>
        <label>Mobile No. : </label>
        <input type='tel' placeholder="+91 80504 80504" value={contact} onChange={(e)=>(setContact(e.target.value))}/>
        <br/><br/>
        <label>Course : </label>
        <input type='text' placeholder="Course to enroll..." value={course} onChange={(e)=>(setCourse(e.target.value))}/>
        <br/><br/>
        <button type='submit'>Submit</button>
      </form>
      {saveddata && (
        <div>
        <h1>Name : {saveddata.name}</h1>
        <h1>Email : {saveddata.email}</h1>
        <h1>Contact: {saveddata.contact}</h1>
        <h1>Course : {saveddata.course}</h1>
        </div>
      )}
    </div>
    
  )
}

export default App
