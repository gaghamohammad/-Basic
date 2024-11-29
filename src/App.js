import logo from './logo.svg';
import './App.css';

function App() {
 
  /** algorithum
   * define a variable
   * use a variable
  */
  const heading = "profiles";
  const age = "Age:- 19";
  const verified =  true;

  /**algotithum
    * return name
   */



  //type 1
  function printname (){
  console .log ("mohammad"); 
  }
  printname()

  //type 2
  function getname(){
    const name = "Mohammad"
    return name;
  }

  //type 3
  function printPassedName (name){
    console.log (name);
  }
  
   
 
//type 4
function add (a,b){
  const result = a + b;
  return result;
}

//ternary opertaor 
//syntax (condition) ? statement 1 : statement 2

  // map
  //number 
  const numbers = [1,2,3,4,5];
  numbers.map((i) => {
  console.log(i)
  })

  //string

  const name =["saad","prince","mohd","nawaf"]
  name.map((name)=>{
    // console.log(name)
  })

  //object
  const profiles = [
    {name:"saad,",
      age:19
    },
    {name:"prince",
      age:29
    },
    {name:"nawaf",
      age:35
    },
    {name:"mohd",
      age :20
    },

  ]

  profiles.map((profile )=>{
    console.log(profile.name,profile.age)
  })

  return (
    <div className="App">
      <h1>{heading}</h1>
      <p>Name: {getname()}</p>
      <p> {age} </p>
      <p>verified: {(verified == true ) ? "yes": "no"}</p>
      {/* <p>result: {add(20,20)}</p> */}
      <p>result add: {add(20,25)}</p>
      <p>result subtract: {subtract(10,20)}</p>
      <p>result multiply: {multiply(20,40)}</p>
      <p>result div: {div(50,20)}</p>


    </div>
  );
}

export default App;

function add(a,b) {
  const result = a+b;
  return result;
}

function subtract (a,b){
  const result = a-b;
  return result;
}
function div (a,b){
  const result = a/b;
  return result;
}
function multiply (a,b){
  const result = a*b;
  return result;
}

