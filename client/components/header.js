import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div className="flex items-center justify-between flex-wrap bg-teal-300 p-6">
      <div id="repository-name">{repositoryName || userName || 'Welcome'}</div>
      <div className="flex justify-end">
        {userName && (
          <Link to="/" id="go-back" className="mr-5">
            Go Main
          </Link>
        )}
        {repositoryName && (
          <Link to={`/${userName}`} id="go-repository-list">
            Go Repositiry List
          </Link>
        )}
      </div>
    </div>
  )
}

Header.propTypes = {}

export default Header
