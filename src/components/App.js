
import React,{useState} from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {
  const [isLoggedIn,setIsloggedin]=useState(false)

  function changeLoginfo(){
    setIsloggedin(true)
  }
  return (
    <div>
      <h1>Parent Component</h1>
        <Form changeLoginfo={changeLoginfo} isLoggedIn={isLoggedIn} />

    </div>
  )
}

export default App
