import React from 'react'
import ReactMarkdown from 'react-markdown'

const Readme = (props) => {
  return (
    <div className="bg-gray-400 rounded-lg border p-5">
      <div className="mb-5 border-b-2 border-gray-500">README</div>
      <div id="description">
        <ReactMarkdown source={props.readme} />
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
