import React from 'react'

export default function Form(props) {

  const {changeLoginfo,isLoggedIn}=props
  function formSubmit(event){
    event.preventDefault()
    //console.log('logged in')
    changeLoginfo()
  }  
  return (
    <div>
      {isLoggedIn ? <p>You are logged in!</p>:
        <form onSubmit={formSubmit}>
        <label htmlFor="username">Username:</label><br></br>
        <input type="text" id="username" name="username" required /><br></br>

        <label htmlFor="password">Password:</label><br></br>
        <input type="password" id="password" name="password" required /><br></br>

        <button type="submit">Login</button>
        </form>
      }
      
    </div>
  )
}
