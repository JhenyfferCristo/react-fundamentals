// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const usernameInputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    const usernameData = usernameInputRef.current.value //or event.target.elements.usernameInput.value
    onSubmitUsername(usernameData)
  }

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleChange}
          value={username}
          type="text"
          id="usernameInput"
          ref={usernameInputRef}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
