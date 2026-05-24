import { useState, useEffect } from 'react'

function App() {
  const [details, setDetails] = useState(()=>{
    const data=JSON.parse(localStorage.getItem("saveddata"))
    return data?data:{
      name: "",
      email: "",
      contact: "",
      course: ""
    }
  })
  // const [email, setEmail] = useState("")
  // const [contact, setContact] = useState("")
  // const [course, setCourse] = useState("")
  // useEffect(()=>{
  //   const data=JSON.parse(localStorage.getItem(name))
  //   if(data){
  //     setName(data)
  //   }
  // },"")

  useEffect(()=>{
    localStorage.setItem("saveddata", JSON.stringify(details))
  },[details])
  const [submitted,setsubmitted]=useState(null);
  const HandleChange=(e)=>{
    const {name, value}=e.target
    setDetails({
      ...details,
      [name]: value
    }
    )
  }
  const HandleSubmit= (e)=>{
    e.preventDefault();
    setsubmitted(details)
    alert("Student Registered Successfully")
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <label>Name : </label>
        <input type='text' name='name' value={details.name} placeholder='e.g. Anubhav Mittal' onChange={HandleChange}/>
        <br/>
        <br/>
        <label>Email : </label>
        <input type='email' name='email' value={details.email} placeholder='e.g. example@gmail.com' onChange={HandleChange}/>
        <br/>
        <br/>
        <label>Mobile No : </label>
        <input type="tel" name='contact' value={details.contact} placeholder='e.g. 7348059003' onChange={HandleChange}/>
        <br/>
        <br/>
        <label>Course : </label>
        <input type='text' name='course' value={details.course} placeholder='e.g. Next.JS' onChange={HandleChange}/>
        <br/>
        <br/>
        <button type="submit">Submit</button>
        <br/><br/>
      </form>
      {submitted && (
  <div>
    <h1>Name: {submitted.name}</h1>
    <h1>Email: {submitted.email}</h1>
    <h1>Contact: {submitted.contact}</h1>
    <h1>Course: {submitted.course}</h1>
  </div>
)}
      
    </div>
  )
}

export default App
