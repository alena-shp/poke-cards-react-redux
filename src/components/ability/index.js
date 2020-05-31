import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './ability.scss'

import { abilityFetch } from './../../actions/ability'
import backImg from "./../../assets/backImg.png"

const Ability = props => {
  const id = props.match.params.id
  const { loading, ability, err } = props.abilityData

  const { abilityFetch } = props
  useEffect(() => {
    abilityFetch(id)
  }, [abilityFetch, id])

  return loading ? (
    <p className="loading">Loading...</p>
  ) : err ? (
    <p>{err}</p>
  ) : (
    <div className="ability">
      <p className="ability__text">{ability}</p>
      <span onClick={() => props.history.goBack()} className="action-back">
        <img className="action-back__img" src={backImg} alt=""/>
        Back</span>
    </div>
  )
}

const mapStateToProps = state => ({ abilityData: state.ability })

const mapDispatchToProps = dispatch => {
  return {
    abilityFetch: id => dispatch(abilityFetch(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ability)
