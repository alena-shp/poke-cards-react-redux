import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.scss'

import ListContainer from './containers/list'
import DetailsContainer from './containers/details'
import AbilityContainer from './containers/ability'

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1 className="app__title">Pokemons</h1>
        <Route path="/" component={ListContainer} exact />
        <Route path="/details/:id/" component={DetailsContainer} exact />
        <Route path="/ability/:id/" component={AbilityContainer} exact />
      </div>
    </Router>
  )
}

export default App
