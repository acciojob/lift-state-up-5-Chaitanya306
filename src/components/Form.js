import React from 'react'

export default function Form(props) {

  const {changeLoginfo}=props
  function formSubmit(event){
    event.preventDefault()
    //console.log('logged in')
    changeLoginfo()
  }  
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}
