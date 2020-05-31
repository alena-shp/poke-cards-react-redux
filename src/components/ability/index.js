import React from 'react'
import './ability.scss'

const Ability = props => {
  return (
    <div className="ability">
      <h1 className="ability__title">Ability</h1>
      <p className="ability__text">Text</p>
      <button onClick={() => props.history.goBack()}>Back</button>
    </div>
  )
}

export default Ability
