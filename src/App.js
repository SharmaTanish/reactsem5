import Greet from "./components/greet.js"; //if Greet exported as default, then here we can change name of "Greet" to whatever we want!!
import Classcompo from "./components/classcompo";
import Count from "./components/count.js";

import Class1 from "./components/class1";
import Class2 from "./components/class2";
import Class3 from "./components/class3";

import Apis from "./components/apis";

import Form from "./components/form";

const Home = () =>{
  var data =[
  {
    name:"Tanish",
    age:20,
    details:[
      "leetcode",
      "codeforces"
    ]
  }
  ,
  {
    name : "Sharma",
    age:20,
    details:[
      "leetcode",
      "codeforces"
    ]
  }
];


  var names = data.map((obj)=>{ //names is array, with each array element "<li>name</li>"!!
    return <li>{obj.name}</li>;
  });

  return(
  <>

  <h1 style={{color:"red"}} >Hello World!</h1> {/*in style first curly brace is for dynamic value passing , i.e., object here!*/}
  
  {/* /////////////////////////////////////////////////////////////////// */}
  
  {/* map return array of data of each element we retunn ans when we write the array in jsx then it automaticallay decode array and print array elemnts, so if we write array array as html tags then html format */}
  
  {
  data.map((obj)=>{
    return obj.age >19 ? (
      
      <div>
      <p>{obj.name}</p>
      <ul style={{backgroundColor:"yellow"}} >
      {obj.details.map((key)=>{ //returs array which directly gives all <li>'s!
        return <li>{key}</li>
      })}
      </ul>
      </div>
      
      
      

    )
    : null ;
  })
  }

  <br></br>
  
  {/* This is same as above only but different way! */}
  {/* {names} */}


  <Greet name="Tanish" /> {/* we use G capital always as if use small then react will not be able to figure out <greet/> is HTML tag or react component!! */}
{/* Any method going to return JSX is React Component ans which does'nt return JSX are simple methods!!, above 'Greet'is simple method!*/}
 <Greet name="Sharma"/>

 <Classcompo name ="Tanish Sharma"/>
 
<Count/>

 <br/>

{/* /////////////////////////////////////////////////////////// */}


  <Class1/>  
  {/* here render only class1 and inside class1 we render class2 and so on! So that by using state only in class1 , when we redender class1 , class2 is part of class1 only sot it automaicaaly redener ans we pass changes sate propes in class2!!*/}
  {/* here above we did jugarh type, if we want to render all classes in app.js only the to reflect change in another class by one class we have to use redux !! */}
{/* 
  <Class2/>

  <Class3/> */}

  <Apis/>





  <Form/>



 
  </>
  )
}

export default Home;