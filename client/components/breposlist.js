import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Reposlist = (props) => {
  const { userName } = useParams()
  return (
    <div>
      {props.repos.map((it) => {
        return (
          <div className="bg-gray-400 font-bold rounded-lg border p-2 mt-5" key={it.name}>
            <Link to={`/${userName}/${it.name}`}>{it.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

Reposlist.propTypes = {}

export default Reposlist
