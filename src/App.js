import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.scss'

import Details from './components/details'
import List from './components/list'
import Ability from './components/ability'

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1 className="app__title">Pokemons</h1>
        <Route path="/" component={List} exact />
        <Route path="/details/:id/" component={Details} exact />
        <Route path="/ability/:id/" component={Ability} exact />
      </div>
    </Router>
  )
}

export default App
