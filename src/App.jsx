import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";
function App() {

  const [userInput,setUserInput] = useState({
    'initialInvestment':10000,
    'annualInvestment':1000,
    'expectedReturn':6,
    'duration':12,
  });
const isValidDuration = (userInput.duration >= 1);

  function handleuserInput(inputType, newVal){
    setUserInput(prevUsrInput =>{
      return{
          ...prevUsrInput,
          [inputType]:+newVal,
      }
    })
  }

  return (
    <>
    <Header/>
    <UserInput  userData={userInput} onInputChange={handleuserInput}/>
    {!isValidDuration && <p className="center">Please enter duration greater than zero.</p>}
    {isValidDuration &&  <Results resultinfo={userInput}/>}
    </>
    
  )
}

export default App
