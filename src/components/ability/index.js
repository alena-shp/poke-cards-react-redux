import React from 'react'
import './ability.scss'
import backImg from './../../assets/backImg.png'

const Ability = ({ history, abilityData }) => {
  const { loading, ability, err } = abilityData

  return loading ? (
    <p className="loading">Loading...</p>
  ) : err ? (
    <p>{err}</p>
  ) : (
    <div className="ability">
      <p className="ability__text">{ability}</p>
      <span onClick={() => history.goBack()} className="action-back">
        <img className="action-back__img" src={backImg} alt="" />
        Back
      </span>
    </div>
  )
}

export default Ability
