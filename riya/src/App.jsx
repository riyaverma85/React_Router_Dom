//rafce
// import React, { useState } from 'react'
// import Navbar from './assets/Navbar';
// import Header from './assets/footer';
// import Img from'./assets/react.svg'
// import ClickMeButton from './assets/footer';
// const App = () => {
// let age=18;
// //  const[age,setAge]=useState("");
//  const loadAge=()=>{
//     if(age>=18){
//       alert(" you vote")
//     }
//     else{
//       alert(" you note vote")
//     }
//  }
//  const App = () => {
//  const Riya=()=>{
// let sum=0
//   for(let i=1;i<=10;i++){
    
//     if(i%2==0){
//       sum++;
//     } 
//   }
//   alert(`total even numbers =${sum}`)
//  }
//   return (
//     <div>
//       <button onClick={Riya} >count even Numbers</button><br/><br/>
//     </div>
//   )
// }
// export default App;

//////////////////////location .href="form"dekhna he
//   return (
//     <div>
//     {/* <Navbar/>
//       <h1>Hello App</h1>
//       {/* <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/> 
//       <button onClick={loadAge} style={{color:"red"}}>Click Me</button><br/><br/>
//     <img src={Img} alt="" />
//     <Header/>
//     <ClickMeButton/>
//     <Footer2/> */}
//     </div>
//   )
// }
// export default App;

// import React, { useState } from 'react'
// const App = () => {
//   let [name,setname]=useState("")
//   let handleClick = (e) => {
//     setname(e.target.value)
//   }
//   const handleClicked = () => {
//     setDisplayText(inputValue);
//   };
//   return (
//     <>
//     <input type='text' value={name}onChange={handleClick}/>
//     <button onClick={handleClicked}>clicked</button>
//     <h2>{handleClicked}</h2>
//     </>
//   )
// }
// export default App
///////////////   change font size use two buttons///////////////////////

// import React, { useState } from 'react'
// const App = () => {
//   let [fontSize,setfontSize]=useState(16)
//   let increaseFont=()=>{
//     setfontSize(fontSize+2)
//   }
//   let decreaseFont=()=>{
//     setfontSize(fontSize-2)
//   }
//   return (
//     <>
//     <p style={{fontSize: `${fontSize}px`}}>ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
//     <button onClick={increaseFont}>+</button>
//     <button onClick={decreaseFont}>-</button>
//     </>
//   )
// }

// export default App
/////////////////////////////three button in tailwind css  /////////////////////
// import React from 'react'
// import "./App.css"
// const App = () => {
//   return (
//     <>  
//     <button className='bg-blue-700 text-amber-50 rounded-2xl px-3 py-3 hover:bg-blue-950'>Primary</button>
//     <button className='bg-lime-400 rounded-2xl px-3 py-3 ml-3 hover:bg-emerald-800' >Success</button>
//     <button className='bg-rose-600 text-amber-50 rounded-2xl px-3 py-3 ml-3 hover:bg-rose-900'>Danger</button>
//     </>
//   )
// }

// export default App

//////props pass img///////////////////////////////////////////



// import React from "react";
// import Profile from "Profile.jsx";
// import img1 from "./assets/download.jpg";   
// const App = () => {
//   return (
//     <>
//       <h1>hello</h1>
//       <Profile img={img1} name="game" city="Dubai" />
//     </>
//   );
// };
// export default App;


///////////////////////////////////////////////////

// import React from "react";
// import CourseCard from "./CourseCard.jsx";
// function App() {
//   const courses = [
//     { name: "React", duration: "3 months" },
//     { name: "Node.js", duration: "2 months" },
//     { name: "JavaScript", duration: "1.5 months" },
//   ];
//   return (
//     <>
//       <h1>Available Courses</h1>
//       {courses.map((course, index) => (
//         <CourseCard key={index} name={course.name} duration={course.duration} />
//       ))}
//     </>
//   );
// }
// export default App;
/////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleMode = () => {
//     setDarkMode(!darkMode)
//   }
//   return (
//      <div style={{backgroundColor: darkMode ? "black" : "white",
//     color: darkMode ? "white" : "black",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     transition: "all 0.3s ease",}}>
//       <h1>{darkMode ?"Dark Mode" : "Light Mode"}</h1>
//       <button onClick={toggleMode}>Toggle Dark Mode!</button>
//        </div>
//   );
// }
// export default App


import React from 'react'
import Navbar from './assets/Navbar'
import Footer from './assets/footer'
const App = () => {
  return (
   <>
     <Navbar/>
            Welcome to riya ....
     <Footer/>
   </>
  )
}

export default App