import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Route } from "react-router-dom"

import Details from "./components/details"
import Filter from "./components/filter"
import List from "./components/list"
import Ability from "./components/ability"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Filter />
        <Route path="/" component={List} exact />
        <Route path="/details/:id/" component={Details} exact />
        <Route path="/ability" component={Ability} exact />
      </div>
    </Router>
  )
}

export default App
