import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userName, setUsername] = useState('')

  const onChange = (e) => {
    setUsername(e.target.value)
  }
  const onClick = () => {
    history.push(`/${userName}`)
  }
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-gray-400 text-black font-bold rounded-lg border shadow-lg p-8">
          <input
            className="mr-2"
            type="text"
            id="input-field"
            value={userName}
            onChange={onChange}
          />
          <button
            className="bg-gray-500 text-black font-bold rounded-lg border shadow-lg p-1"
            type="button"
            id="search-button"
            onClick={onClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
