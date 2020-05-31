import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.scss'

import Ability from './components/ability'
import listContainer from './containers/listContainer'
import detailsContainer from './containers/detailsContainer'

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1 className="app__title">Pokemons</h1>
        <Route path="/" component={listContainer} exact />
        <Route path="/details/:id/" component={detailsContainer} exact />
        <Route path="/ability/:id/" component={Ability} exact />
      </div>
    </Router>
  )
}

export default App
