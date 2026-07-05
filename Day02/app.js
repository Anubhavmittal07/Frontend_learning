
//const element = React.createElement('h1',{id:'title',className:'element'},"Hello Coder Army")

//if want to add more children in root, it will be lengthy
const element2 = React.createElement('div',null,
    React.createElement('h1',null,"Hello Brother"),
    React.createElement('h2',null,"Hii"))

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(element2)


//kya html jitna aasan ho skta hai naya element banana

//JSX: javascript XML: look like HTML

//Babel : JSX --> React.createElement()
//when writing jsx in multiple line use ()

const element = <h1 id="heading" className="first">Hello Baccho!</h1> //ye syntax js nhi smjh skta

console.log(element)
//root.render(element)

//React Element
// const element2 = (
//     <div>
//         <h1>Anubhav</h1>
//         <h2>Mittal</h2>
//     </div>
// )

//doesn't work like individually this needs wrapping
// const element2 = (
//     <h1>Hello</h1>
//     <h2>Hii</h2>
// )


//React Component --> It's a function only which returns JSX for reusability
const courses = ["HTML","Css","Js","React"] // as it can be represented as children of any element
function App(courses){ //capital A to diffrentiate custom ele with html element
    return(
        <div>
        <h1>Hello Coder Army </h1>
        <ul>{courses.map(course=><li>{course}</li>)}</ul>
        </div>
    );
}

root.render(App(courses))
//root.render(<App/>)



