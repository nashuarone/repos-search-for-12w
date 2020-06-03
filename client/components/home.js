import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Switch, Route, useParams } from 'react-router-dom'
import Main from './amain'
import Reposlist from './breposlist'
import Readme from './creadme'
import Header from './header'
import Head from './head'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [reposG, setRepos] = useState([])
  const [readmeG, setReadme] = useState('')

  useEffect(() => {
    if (typeof userName !== 'undefined') {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((res) => {
        setRepos(res.data)
      })
    }
  }, [userName])
  useEffect(() => {
    if (typeof userName !== 'undefined' && typeof repositoryName !== 'undefined') {
      axios
        .get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`)
        .then((res2) => {
          setReadme(atob(res2.data.content))
        })
    }
  }, [userName, repositoryName])

  return (
    <div>
      <Head title="Reposearch App" />
      <Header />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <Reposlist repos={reposG} />} />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={() => <Readme readme={readmeG} />}
        />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
